import Web3 from 'web3'
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/v3/3781457252c74e0fab462d669ed3f9d8'
  )
)
export default web3
