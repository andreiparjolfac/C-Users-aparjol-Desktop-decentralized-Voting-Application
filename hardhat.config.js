//require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const {API_URL,PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork:"volta",
  networks:{
    hardhat:{},
    volta:{
      url:API_URL,
      accounts:[PRIVATE_KEY],
      gas:210000000,
      gasPrice:2100000000,
    }
  }
};
