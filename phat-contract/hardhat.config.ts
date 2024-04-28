import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ProxyAgent, setGlobalDispatcher } from "undici";

if (process.env.http_proxy || process.env.https_proxy) {
  const proxy = (process.env.http_proxy || process.env.https_proxy)!;
  const proxyAgent = new ProxyAgent(proxy);
  setGlobalDispatcher(proxyAgent);
}

// If not set, it uses the hardhat account 0 private key.
const DEPLOYER_PRIVATE_KEY =
  process.env.DEPLOYER_PRIVATE_KEY ??
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// Get a free POLYGONSCAN_API_KEY at https://polygonscan.com.
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
          viaIR: true,
        },
      },
    ],
  },
  networks: {
    polygon: {
      // If not set, you can get your own Alchemy API key at https://dashboard.alchemyapi.io or https://infura.io
      url: process.env.POLYGON_RPC_URL ?? "",
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    goerli: {
      // If not set, you can get your own Alchemy API key at https://dashboard.alchemyapi.io or https://infura.io
      url: process.env.GOERLI_RPC_URL ?? "",
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
};

export default config;