const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getChainId().then(id => console.log('Chain Id ', id));
web3.eth.getTransactionCount('0x1932f7f9D1FA1F68011c351C9E25597d6d69824e').then(count => console.log('cont is ', count))
web3.eth.getGasPrice().then((error, gPrice) => console.log('Current gas price ', gPrice))
web3.eth.getUncle(2,0).then((blockHashOrBlockNumber, uncleIndex, returnTransactionObjects) => console.log('Uncles ', blockHashOrBlockNumber, uncleIndex))
web3.eth.getBlockTransactionCount(3).then(blockNo => console.log('getBlockTransactionCount ', blockNo))


