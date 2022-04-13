require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/mytestproj.sol/mytestproj.json");
// console.log(JSON.stringify(contract.abi));
const contractAddress = "0x644AF25591cBf126219EC608aeAe17eA011D7068";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

// async function mintNFT(tokenURI) {
//   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

//   //the transaction
//   const tx = {
//     'from': PUBLIC_KEY,
//     'to': contractAddress,
//     'nonce': nonce,
//     'gas': 500000,
//     'maxPriorityFeePerGas': 2999999987,
//     'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
//   };

//   const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
//   const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
//   console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
// }

// mintNFT("https://gateway.pinata.cloud/ipfs/QmQjtsbyDkAVHA4xay3GcrqryVJuKBFd3Hu8Vyrjvpxmsb");

 async function setURI() {
   
 }