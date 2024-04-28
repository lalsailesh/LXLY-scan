export const bridgeHeaders = [
  { title: "Network", flexWidth: "0.25" },
  { title: "Tx Hash", flexWidth: "0.5" },
  { title: "Block", flexWidth: "0.25" },
];

export const claimHeaders = [
  { title: "Network", flexWidth: "0.25" },
  { title: "Tx Hash", flexWidth: "0.5" },
  { title: "Block", flexWidth: "0.25" },
];

export const addressPageHeaders = [
  { title: "Network", flexWidth: "0.15" },
  { title: "Tx Hash", flexWidth: "0.24" },
  { title: "Sender", flexWidth: "0.24" },
  { title: "Time", flexWidth: "0.24" },
  { title: "Block", flexWidth: "0.15" },
];

export const ZKEvmBridge = "0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7"; //same on goerli and zkevm
export const autoclaim = "0x05f2F7CaD85De6a53A0480515fe29789065682AA";
export const SERVER_URI = "https://lxly.onrender.com";
// export const SERVER_URI = "http://localhost:8080";

export const autoclaimABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "phatAttestor",
        type: "address",
      },
      {
        internalType: "contract IPolygonZkEVMBridge",
        name: "_polygonZkEVMBridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "BadAttestor",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "kenLen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueLen",
        type: "uint256",
      },
    ],
    name: "BadCondLen",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "kenLen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueLen",
        type: "uint256",
      },
    ],
    name: "BadUpdateLen",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "actionId",
        type: "uint8",
      },
    ],
    name: "CannotDecodeAction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "cond",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "expected",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "actual",
        type: "uint32",
      },
    ],
    name: "CondNotMet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Internal_toUint32Strict_outOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targetIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tailIdx",
        type: "uint256",
      },
    ],
    name: "InvalidPopTarget",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [],
    name: "MetaTxSignatureNotMatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "NonceTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "actionId",
        type: "uint8",
      },
    ],
    name: "UnsupportedAction",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reqId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reqData",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "AutoClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "MessageProcessedTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "MessageQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MetaTxDecoded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timepoint",
        type: "uint256",
      },
    ],
    name: "NewRegister",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reqId",
        type: "uint256",
      },
    ],
    name: "NotReady",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ATTESTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "key",
        type: "bytes",
      },
    ],
    name: "getStorage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "metaTxGetNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "metaTxPrepare",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MetaTxReceiver.ForwardRequest",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "metaTxPrepareWithNonce",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MetaTxReceiver.ForwardRequest",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MetaTxReceiver.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "metaTxRollupU256CondEq",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MetaTxReceiver.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "metaTxVerify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "action",
        type: "bytes",
      },
    ],
    name: "onMessageReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "polygonZkEVMBridge",
    outputs: [
      {
        internalType: "contract IPolygonZkEVMBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "key",
        type: "bytes",
      },
    ],
    name: "queueGetBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueGetPrefix",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "key",
        type: "bytes",
      },
    ],
    name: "queueGetUint",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "registerClaimer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "request",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "condKeys",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "condValues",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "updateKeys",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "updateValues",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "actions",
        type: "bytes[]",
      },
    ],
    name: "rollupU256CondEq",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "phatAttestor",
        type: "address",
      },
    ],
    name: "setAttestor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytes",
        type: "bytes",
      },
    ],
    name: "toUint32Strict",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const DUMMY_DATA_SOURCE = [
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Inflight",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
];

export const DUMMY_DATA_DESTINATION = [
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Delivered",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Inflight",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
  {
    status: "Inflight",
    blockNumber: 202323,
    transactionHash:
      "0x421f5909098264a0f5278b0f735e3e4a4975b46912de40622afd453f0852cd6b",
    from: "0xd42E8e149c109E15BFb10416c4181e6ae7A6145d",
    created: "26 secs ago",
  },
];

export const ZKEvmBridgeAbi = [
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountDoesNotMatchMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "DestinationNetworkInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "EtherTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "GlobalExitRootInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSmtProof",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleTreeFull",
    type: "error",
  },
  {
    inputs: [],
    name: "MessageFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "MsgValueNotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyEmergencyState",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyNotEmergencyState",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyPolygonZkEVM",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "leafType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "depositCount",
        type: "uint32",
      },
    ],
    name: "BridgeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyStateActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyStateDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wrappedTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "NewWrappedToken",
    type: "event",
  },
  {
    inputs: [],
    name: "activateEmergencyState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "permitData",
        type: "bytes",
      },
    ],
    name: "bridgeAsset",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "forceUpdateGlobalExitRoot",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "bridgeMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "mainnetExitRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rollupExitRoot",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "claimAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "mainnetExitRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rollupExitRoot",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "claimMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimedBitMap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deactivateEmergencyState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "leafType",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originAddress",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "destinationNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "metadataHash",
        type: "bytes32",
      },
    ],
    name: "getLeafValue",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
    ],
    name: "getTokenWrappedAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalExitRootManager",
    outputs: [
      {
        internalType: "contract IBasePolygonZkEVMGlobalExitRoot",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_networkID",
        type: "uint32",
      },
      {
        internalType: "contract IBasePolygonZkEVMGlobalExitRoot",
        name: "_globalExitRootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_polygonZkEVMaddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isEmergencyState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdatedDepositCount",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkID",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "polygonZkEVMaddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "precalculatedWrapperAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenInfoToWrappedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateGlobalExitRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leafHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "smtProof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "verifyMerkleProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wrappedTokenToTokenInfo",
    outputs: [
      {
        internalType: "uint32",
        name: "originNetwork",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "originTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
