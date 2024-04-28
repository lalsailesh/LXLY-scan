import "@phala/pink-env";
import { AbiCoder } from "@phala/ethers";

type HexString = `0x${string}`;

const types = [
  "bytes32[32]",
  "uint32",
  "bytes32",
  "bytes32",
  "uint32",
  "address",
  "uint32",
  "address",
  "uint256",
  "bytes",
];
function encodeReply(data: any): HexString {
  // return Coders.encode([uintCoder, uintCoder], reply) as HexString;
  const coder = AbiCoder.defaultAbiCoder();
  return coder.encode(types, data) as HexString;
}
function encodeBytes(data: any): HexString {
  // return Coders.encode([uintCoder, uintCoder], reply) as HexString;
  const coder = AbiCoder.defaultAbiCoder();
  return coder.encode(["uint", "bytes[]"], [0, data]) as HexString;
}
// Defined in OracleConsumerContract.sol
const TYPE_READY = 0;
const TYPE_NOTREADY = 2;

enum Error {
  BadRequestString = "BadRequestString",
  FailedToFetchData = "FailedToFetchData",
  FailedToDecode = "FailedToDecode",
  MalformedRequest = "MalformedRequest",
  NotReady = "NotReady",
  AlreadyClaimed = "AlreadyClaimed",
  NothingToClaim = "NothingToClaim",
}
function fetchRegisters(): any {
  let headers = {
    "Content-Type": "application/json",
    "User-Agent": "phat-contract",
  };
  let query = JSON.stringify({
    query: `{
      newRegisters(first: 20) {
        _address
      }
    }`,
  });
  let body = stringToHex(query);
  let response = pink.httpRequest({
    url: "https://api.studio.thegraph.com/query/59658/autoclaim/v0.2.0",
    method: "POST",
    headers,
    body,
    returnTextBody: true,
  });
  let respBody = response.body;
  if (typeof respBody !== "string") {
    throw Error.FailedToDecode;
  }
  respBody = JSON.parse(respBody);
  return (respBody as any).data.newRegisters;
}

function fetchMerkleProofs(): any {
  const regsiters: any = fetchRegisters();
  const url = "https://bridge-api.public.zkevm-test.net/bridges/";
  let AllProofs: any = [];

  for (let i = 0; i < regsiters.length; i++) {
    let response = pink.httpRequest({
      url: url + regsiters[i]["_address"],
      method: "GET",
      returnTextBody: true,
    });
    let respBody: any = response.body;
    if (typeof respBody !== "string") {
      throw Error.FailedToDecode;
    }
    respBody = JSON.parse(respBody);
    if (respBody.deposits.length > 0) {
      for (let i = 0; i < respBody.deposits.length; i++) {
        if (
          respBody.deposits[i].ready_for_claim &&
          respBody.deposits[i].claim_tx_hash == "" &&
          respBody.deposits[i].dest_net === 0
        ) {
          let currentDeposit = respBody.deposits[i];
          let merkleProofs = pink.httpRequest({
            url: `https://bridge-api.public.zkevm-test.net/merkle-proof?deposit_cnt=${respBody.deposits[i].deposit_cnt}&net_id=${respBody.deposits[i].orig_net}`,
            method: "GET",
            returnTextBody: true,
          });
          let merkleProofsBody: any = merkleProofs.body;
          if (typeof merkleProofsBody !== "string") {
            throw Error.FailedToDecode;
          }
          merkleProofsBody = JSON.parse(merkleProofsBody);
          let proof = merkleProofsBody.proof;

          const encodedProofs = encodeReply([
            proof.merkle_proof,
            currentDeposit.deposit_cnt,
            proof.main_exit_root,
            proof.rollup_exit_root,
            currentDeposit.orig_net,
            currentDeposit.orig_addr,
            currentDeposit.dest_net,
            currentDeposit.dest_addr,
            currentDeposit.amount,
            currentDeposit.metadata,
          ]);

          AllProofs.push(encodedProofs);

          if (AllProofs.length == 1) {
            break;
          }
        }
      }
    }
  }
  if (AllProofs.length == 0) {
    throw Error.NothingToClaim;
  }
  return encodeBytes(AllProofs);
}

function stringToHex(str: string): string {
  var hex = "";
  for (var i = 0; i < str.length; i++) {
    hex += str.charCodeAt(i).toString(16);
  }
  return "0x" + hex;
}

export default function main(): HexString {
  try {
    const proofs = fetchMerkleProofs();
    let proof = proofs.slice(0, 2) + "0" + proofs.slice(2);
    console.log(proof);
    return proofs as HexString;
  } catch (error) {
    throw error;
  }
}
