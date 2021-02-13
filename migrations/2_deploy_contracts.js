const DappToken = artifacts.require('Dapptoken');
const DaiToken = artifacts.require('DaiToken');
const TokenFarm = artifacts.require('TokenFarm');

module.exports = async function(deployer, network, accounts) {
  //deploy mock Dai token
  await deployer.deploy(DaiToken);
  const DaiToken = await DaiToken.deployed();

  //deploy mock Dai token
  await deployer.deploy(DappToken);
  const DappToken = await DappToken.deployed();

  //deploy mock Dai token
  await deployer.deploy(TokenFarm, DappToken.address, DaiToken.address);
  const TokenFarm = await TokenFarm.deployed();

  //Transfer all tokens to TokenFarm (1 million)
  await DappToken.transfer(tokenFarm.address, '1000000000000000000000000')

  //Transfer 100 Dai tokens to an investor
  await Daitoken.transfer(accounts[1], '100000000000000000000')
};
