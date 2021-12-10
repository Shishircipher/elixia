// interact.js
const contract = require("../artifacts/contracts/notary.sol/Notary.json");

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
console.log(JSON.stringify(contract.abi));
// interact.js

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
async function main() {
    //const message = await helloWorldContract.message();
    //console.log("The message is: " + message); 

    //console.log("Updating the message...");
    //const tx = await helloWorldContract.addDocHash("0x5abf61c361e5ef91582e70634dfbf2214fbdb6f29c949160b69f27ae947d919d");
    //console.log();
    //await tx.wait();

    const tx = await helloWorldContract.findDocHash("0x9abf61c361e5ef91582e70634dfbf2214fbdb6f29c949160b69f27ae947d919d")
    console.log(tx);
    let resultObj = {
        mineTime:  new Date(tx[0] * 1000),
        blockNumber: tx[1]
      }
    console.log(resultObj);

    //const newMessage = await helloWorldContract.message();
    //console.log("The new message is: " + newMessage); 
};

main();