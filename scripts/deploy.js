async function main() {
    // Grab the contract factory 
    const MyNFT = await ethers.getContractFactory("mytestproj");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy("0xb24b05d40cb5b6117195c899a78672c5d077ce1c5bfed0a853d20faabf65ffce", ""); // Instance of the contract 
    console.log("Contract deployed to address:", myNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });