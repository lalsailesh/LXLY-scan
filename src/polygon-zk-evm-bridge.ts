import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  BridgeEvent,
  ClaimEvent,
} from "../generated/PolygonZkEVMBridge/PolygonZkEVMBridge";
import {
  BridgeEvent as Bridge,
  ClaimEvent as Claim,
} from "../generated/schema";

export function handleBridgeEvent(event: BridgeEvent): void {
  let entity = new Bridge(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.leafType = new BigInt(event.params.leafType);
  entity.originNetwork = event.params.originNetwork;
  entity.originAddress = event.params.originAddress;
  entity.destinationAddress = event.params.destinationAddress;
  entity.destinationNetwork = event.params.destinationNetwork;
  entity.amount = event.params.amount;
  entity.metadata = event.params.metadata;
  entity.depositCount = event.params.depositCount;
  entity.transactionHash = event.transaction.hash;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.gasLimit = event.transaction.gasLimit;
  entity.from = event.transaction.from;
  entity.transactionHash = event.transaction.hash;
  entity.blockTimestamp = event.block.timestamp;
  entity.network = "Goerli";

  entity.save();
}

export function handleClaimEvent(event: ClaimEvent): void {
  let entity = new Claim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // let txHash: Bytes | null = null;
  // if (event.receipt !== null) {
  //   if (event.receipt.transactionHash !== undefined) {
  //     txHash = event.receipt.transactionHash;
  //   }
  // }

  entity.index = event.params.index;
  entity.amount = event.params.amount;
  entity.originNetwork = event.params.originNetwork;
  entity.destinationAddress = event.params.destinationAddress;
  entity.transactionHash = event.transaction.hash;
  entity.blockNumber = event.block.number;
  entity.gasLimit = event.transaction.gasLimit;
  entity.from = event.transaction.from;
  entity.to = event.transaction.to;
  entity.blockTimestamp = event.block.timestamp;
  entity.network = "Goerli";

  entity.save();
}
