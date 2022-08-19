import { ethers } from "hardhat";
const { task } = require("hardhat/config")

async function main() {
    // const [NFTdeployer] = await ethers.getSigners();

    // console.log(`Deploying this NFt with this account: ${NFTdeployer.address}`);
    // console.log(`Let me know the account balance: ${(await NFTdeployer.getBalance()).toString}`);

    const NFT = await ethers.getContractFactory("ManimalNFT");
    const nft = await NFT.deploy();
    console.log(`Contract Perfectly deployed to this address: ${nft.address}`);

    
}

// 0x5FbDB2315678afecb367f032d93F642f64180aa3 - ADDRESS DEPLOYED TO
// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 - NFT DEPLOYED WITH 
// 0x968ae078b198eb5cfbe36bb350bbbd8467553ffde6ea8653596a9bbc35dcb5b5 DEPOLY HASH

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  