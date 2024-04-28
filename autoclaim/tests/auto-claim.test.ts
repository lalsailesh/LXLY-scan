import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { AutoClaimed } from "../generated/schema"
import { AutoClaimed as AutoClaimedEvent } from "../generated/AutoClaim/AutoClaim"
import { handleAutoClaimed } from "../src/auto-claim"
import { createAutoClaimedEvent } from "./auto-claim-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let reqId = BigInt.fromI32(234)
    let reqData = "Example string value"
    let value = BigInt.fromI32(234)
    let newAutoClaimedEvent = createAutoClaimedEvent(reqId, reqData, value)
    handleAutoClaimed(newAutoClaimedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AutoClaimed created and stored", () => {
    assert.entityCount("AutoClaimed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AutoClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reqId",
      "234"
    )
    assert.fieldEquals(
      "AutoClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reqData",
      "Example string value"
    )
    assert.fieldEquals(
      "AutoClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "value",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
