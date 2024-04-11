const { ethers } = require("hardhat");

async function main(){
    const Contract = await ethers.getContractFactory("Transactions");

    const Transactions = await Contract.deploy();

    console.log("Contract address: " , Transactions.address);
}

main().then(()=>process.exit(0)).catch(error=>{console.error(error);
    process.exit(1);
});