//https://eth-ropsten.alchemyapi.io/v2/1IhrDtPyXVaxld-fuDP1PVH02HgMTkAs

require('@nomiclabs/hardhat-waffle');
require("dotenv").config()

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_ENDPOINT,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
}