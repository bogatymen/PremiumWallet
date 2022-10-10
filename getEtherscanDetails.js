const ethers = require("ethers");

const INFURA_ID = '0918f7ca3a0f45478c42053645e767c3'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);


// https://etherscan.io/tx/0x21ec491409e6f9b240eb2b69317d1f433f4443e7e777cee7893e391c2ebe8ac8
const txHashETH = "0x21ec491409e6f9b240eb2b69317d1f433f4443e7e777cee7893e391c2ebe8ac8";
// https://etherscan.io/tx/0x1e0695397ee10693a60930714206a8869e205725e625d8b60f8b63d7331eee12
const txHashERC20 = "0x1e0695397ee10693a60930714206a8869e205725e625d8b60f8b63d7331eee12";
// https://etherscan.io/tx/0xe94fb01d78dd1d7456eb1384539a423b529c09ed6a0719609ee4ac7a95599661
// https://etherscan.io/tokentxns-nft
const txHashERC721 = "0xe94fb01d78dd1d7456eb1384539a423b529c09ed6a0719609ee4ac7a95599661";
// https://etherscan.io/tx/0x0eecc6e21a101ea1aa52ab465d2a04c34a78012f022777cf3ae5c65ac0c4647e
// https://etherscan.io/tokens-nft1155
const txHashERC1155 = "0xc38d929f6b0b857c5a9993b2bb764b68dd747b491b66728a5f0579210782b668";

const main = async () => {
    //let txData = await provider.getTransaction(txHashETH);
    //console.log(txData);
    let txData = await provider.getTransactionReceipt(txHashETH);
    console.log(txData);
    let status = "false" ; 
    if (txData.status == 1){status = "Confirmed"}

    console.log(`\nTransaction Hash: ${txData.transactionHash} \n \
Block Number: ${txData.blockNumber}\n \
Status: ${status}\n \
From: ${txData.from} \n \
To: ${txData.to} \n \
Gas Used: ${txData.gasUsed} \n \
Logs: ${txData.value}`);
    

}
main();

