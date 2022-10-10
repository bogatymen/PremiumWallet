const ethers = require("ethers");

const INFURA_ID = '0918f7ca3a0f45478c42053645e767c3'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

// ---- define functions ------------
let etherscanLink = function getEtherscanLink(hexString){ 
    let etherscanLink ="";
    if( hexString.length > 45) {etherscanLink = "https://etherscan.io/tx/" + hexString; }
    else { etherscanLink = "https://etherscan.io/address/" + hexString ;}
    return etherscanLink;
}

// --------------------------------------


// lista Premium Receiverow
const premiumReceivers = [ 
    "0x2faf487a4414fe77e2327f0bf4ae2a264a776ad2",
    "0xE8c060F8052E07423f71D445277c61AC5138A2e5" 
];

const main = async () => {

      const topicSets = [
          ethers.utils.id("Transfer(address,address,uint256)"),
          null,
          [
            ethers.utils.hexZeroPad(premiumReceivers[0], 32),
            ethers.utils.hexZeroPad(premiumReceivers[1], 32)
          ]
        ];

        provider.on(topicSets, (log, event) => {
            // Emitted any token is sent TO either address
            const tokenAddress = log.address.toLowerCase();
            const txHash = log.transactionHash.toLowerCase();
            
            let txn_test = await provider.getTransaction(txHash);

            // display token transfers
            console.log(`Token ${tokenAddress} transferred to new wallet \n Tx hash = ${txHash} \n ${txn_test}`);
        })

}

main();
