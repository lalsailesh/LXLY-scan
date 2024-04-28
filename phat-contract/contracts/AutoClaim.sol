// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@phala/solidity/contracts/PhatRollupAnchor.sol";
import "./polygonZKEVMContracts/interfaces/IPolygonZkEVMBridge.sol";

error AlreadyRegistered();

contract AutoClaim is PhatRollupAnchor, Ownable {
    event AutoClaimed(uint reqId, string reqData, uint256 value);
    event NotReady(uint reqId);
    event NewRegister(address _address, uint timepoint);

    uint constant TYPE_READY = 0;

    IPolygonZkEVMBridge public immutable polygonZkEVMBridge;

    uint nextRequest = 1;
    mapping(address => bool) addressesRegistered;

    constructor(address phatAttestor, IPolygonZkEVMBridge _polygonZkEVMBridge) {
        _grantRole(PhatRollupAnchor.ATTESTOR_ROLE, phatAttestor);
        polygonZkEVMBridge = _polygonZkEVMBridge;
    }

    function setAttestor(address phatAttestor) public onlyOwner {
        _grantRole(PhatRollupAnchor.ATTESTOR_ROLE, phatAttestor);
    }

    function registerClaimer(address _address) external {
        if (addressesRegistered[_address]) {
            revert AlreadyRegistered();
        }
        addressesRegistered[_address] = true;
        emit NewRegister(_address, block.timestamp);
    }

    // need to restrict this with chainlink
    function request() external {
        // assemble the request
        uint id = nextRequest;
        _pushMessage(abi.encode(id));
        nextRequest += 1;
    }

    function _onMessageReceived(bytes calldata action) internal override {
        (, bytes[] memory data) = abi.decode(action, (uint, bytes[]));
        for (uint8 i = 0; i < data.length; ) {
            (
                bytes32[32] memory smtProof,
                uint32 index,
                bytes32 mainnetExitRoot,
                bytes32 rollupExitRoot,
                uint32 originNetwork,
                address originAddress,
                uint32 destinationNetwork,
                address destinationAddress,
                uint256 amount,
                bytes memory metadata
            ) = abi.decode(
                    data[i],
                    (
                        bytes32[32],
                        uint32,
                        bytes32,
                        bytes32,
                        uint32,
                        address,
                        uint32,
                        address,
                        uint256,
                        bytes
                    )
                );

            polygonZkEVMBridge.claimMessage(
                smtProof,
                index,
                mainnetExitRoot,
                rollupExitRoot,
                originNetwork,
                originAddress,
                destinationNetwork,
                destinationAddress,
                amount,
                metadata
            );

            unchecked {
                i++;
            }
        }
    }
}
