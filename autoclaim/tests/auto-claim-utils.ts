import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  AutoClaimed,
  EIP712DomainChanged,
  MessageProcessedTo,
  MessageQueued,
  MetaTxDecoded,
  NewRegister,
  NotReady,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/AutoClaim/AutoClaim"

export function createAutoClaimedEvent(
  reqId: BigInt,
  reqData: string,
  value: BigInt
): AutoClaimed {
  let autoClaimedEvent = changetype<AutoClaimed>(newMockEvent())

  autoClaimedEvent.parameters = new Array()

  autoClaimedEvent.parameters.push(
    new ethereum.EventParam("reqId", ethereum.Value.fromUnsignedBigInt(reqId))
  )
  autoClaimedEvent.parameters.push(
    new ethereum.EventParam("reqData", ethereum.Value.fromString(reqData))
  )
  autoClaimedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return autoClaimedEvent
}

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
}

export function createMessageProcessedToEvent(
  param0: BigInt
): MessageProcessedTo {
  let messageProcessedToEvent = changetype<MessageProcessedTo>(newMockEvent())

  messageProcessedToEvent.parameters = new Array()

  messageProcessedToEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return messageProcessedToEvent
}

export function createMessageQueuedEvent(
  idx: BigInt,
  data: Bytes
): MessageQueued {
  let messageQueuedEvent = changetype<MessageQueued>(newMockEvent())

  messageQueuedEvent.parameters = new Array()

  messageQueuedEvent.parameters.push(
    new ethereum.EventParam("idx", ethereum.Value.fromUnsignedBigInt(idx))
  )
  messageQueuedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return messageQueuedEvent
}

export function createMetaTxDecodedEvent(): MetaTxDecoded {
  let metaTxDecodedEvent = changetype<MetaTxDecoded>(newMockEvent())

  metaTxDecodedEvent.parameters = new Array()

  return metaTxDecodedEvent
}

export function createNewRegisterEvent(
  _address: Address,
  timepoint: BigInt
): NewRegister {
  let newRegisterEvent = changetype<NewRegister>(newMockEvent())

  newRegisterEvent.parameters = new Array()

  newRegisterEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  newRegisterEvent.parameters.push(
    new ethereum.EventParam(
      "timepoint",
      ethereum.Value.fromUnsignedBigInt(timepoint)
    )
  )

  return newRegisterEvent
}

export function createNotReadyEvent(reqId: BigInt): NotReady {
  let notReadyEvent = changetype<NotReady>(newMockEvent())

  notReadyEvent.parameters = new Array()

  notReadyEvent.parameters.push(
    new ethereum.EventParam("reqId", ethereum.Value.fromUnsignedBigInt(reqId))
  )

  return notReadyEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
