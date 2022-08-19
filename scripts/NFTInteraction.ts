import { ethers } from "hardhat";


async function main() {

  const ManimalNFT = await ethers.getContractFactory("ManimalNFT");
  const interactManimalNFT = await ManimalNFT.attach("0x7BeC5d14EDb91C23f5a882Abb8442BE8218d8FAF");

  // @ts-ignore
  const FirstMint = await interactManimalNFT.mintTo("0x32c8328f9407a1dF4De8D655a4C83B022D44a2f6","QmWvEoqfUCgyWDqGpbod5cp4HiQuEUpN241fL2avFUauzg");

  const mintX = await FirstMint.wait();
  console.log("Successful minted" , mintX);

}

// OPEN SEA LINK : "https://testnets.opensea.io/assets/rinkeby/0xec3e912e8bf0685b87c8430b9178f4469039f42e/1" FIRST NFT

//  OPEN SEA IMAGE SHOWING : "https://testnets.opensea.io/assets/rinkeby/0x7bec5d14edb91c23f5a882abb8442be8218d8faf/1"

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

  