import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import express from "express";

const app = express();

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

async function blockNumber() {
  await client.getBlockNumber();
}

blockNumber();

app.listen(3000, () => {
  console.log("running port 3000");
});
