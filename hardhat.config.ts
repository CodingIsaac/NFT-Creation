import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });



const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/B_J0xZYYDNfBLw9wbk7QefvONykzCbSd",
      
      
      // @ts-ignore
     
    },
    // etherscan: {
      
      // }
    },
    etherscan: {
      apiKey: "F62UE4KVTA82HSNC9TY4YA92JGPF5XID5D",

  }
};

export default config;
