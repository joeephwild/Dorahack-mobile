require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    bnb: {
      url: "https://bsc-testnet.nodereal.io/v1/5f12558fd5694929b15178cc730cfda0",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  }
};
