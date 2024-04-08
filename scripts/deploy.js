const { ethers } = require("hardhat");

async function main(){
    const Contract = await ethers.getContractFactory("Voting");

    const Voting = await Contract.deploy(["Mark","Mike","Henry","Rock"],90);

    console.log("Contract address: " , Voting.address);
}

main().then(()=>process.exit(0)).catch(error=>{console.error(error);
    process.exit(1);
});