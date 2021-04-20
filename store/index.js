import Web3 from 'web3'
// eslint-disable-next-line no-unused-vars
let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/3781457252c74e0fab462d669ed3f9d8'
    )
  )
}
