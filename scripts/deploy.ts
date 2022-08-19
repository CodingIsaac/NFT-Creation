import { ManimalNFT }  from './../typechain-types/contracts/NFTcontract.sol/ManimalNFT';
import { ethers } from "hardhat";


async function main() {

  const ManimalNFT = await ethers.getContractFactory("ManimalNFT");
  const interactManimalNFT = await ManimalNFT.attach("0xEC3E912E8Bf0685B87c8430b9178F4469039F42e");

  const FirstMint = await (await interactManimalNFT.mintTo("0x32c8328f9407a1dF4De8D655a4C83B022D44a2f6")).wait();
  console.log("Successful minted" , FirstMint)


}

// OPEN SEA LINK : "https://testnets.opensea.io/assets/rinkeby/0xec3e912e8bf0685b87c8430b9178f4469039f42e/1"

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
