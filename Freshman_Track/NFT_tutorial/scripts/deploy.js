// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
    const nftContract = await ethers.getContractFactory("GameItem");

    // here we deploy the contract
    const deployedNFTContract = await nftContract.deploy();

    // print the ddress of the deployed contract
    console.log("NFT Contract Address:", deployedNFTContract.address);
}

// call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
