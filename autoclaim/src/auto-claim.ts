import {
  AutoClaimed as AutoClaimedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  MessageProcessedTo as MessageProcessedToEvent,
  MessageQueued as MessageQueuedEvent,
  MetaTxDecoded as MetaTxDecodedEvent,
  NewRegister as NewRegisterEvent,
  NotReady as NotReadyEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/AutoClaim/AutoClaim"
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
} from "../generated/schema"

export function handleAutoClaimed(event: AutoClaimedEvent): void {
  let entity = new AutoClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reqId = event.params.reqId
  entity.reqData = event.params.reqData
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageProcessedTo(event: MessageProcessedToEvent): void {
  let entity = new MessageProcessedTo(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageQueued(event: MessageQueuedEvent): void {
  let entity = new MessageQueued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.idx = event.params.idx
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetaTxDecoded(event: MetaTxDecodedEvent): void {
  let entity = new MetaTxDecoded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewRegister(event: NewRegisterEvent): void {
  let entity = new NewRegister(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address
  entity.timepoint = event.params.timepoint

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNotReady(event: NotReadyEvent): void {
  let entity = new NotReady(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reqId = event.params.reqId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
