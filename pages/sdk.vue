<template>
  <div class="content">
    <h1>UNISWAP IFRAME</h1>
    <h1>Hello! Here you can exchange your xUAH!!!</h1>
    <iframe
      id="myId"
      src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
      height="660px"
      width="100%"
      style="
    border: 0;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    max-width: 600px;
    min-width: 300px;
  "
    />
  </div>
</template>

<script>
/* eslint-disable */

import {
  ChainId,
  Token,
  WETH,
  TokenAmount,
  Pair,
  // eslint-disable-next-line no-unused-vars
  Route,
  Fetcher
} from '@uniswap/sdk'
export default {
  data() {
    return {
      Token: 0,
      TokenBalance: 0,
      lptAmount: 0,
      tknAmount: 0
    }
  },
  async beforeMount() {
    const tokenAddress = '0xc778417E063141139Fce010982780140Aa0cD5Ab'
    const chainId = ChainId.MAINNET
    Fetcher.fetchTokenData(chainId, '0x58b6A8A3302369DAEc383334672404Ee733aB239').then(
      (val) => (this.Token = val)
    )

    // const LPT = new Token(
    //   ChainId.MAINNET,
    //   '0x58b6A8A3302369DAEc383334672404Ee733aB239',
    //   18,
    //   'LPT',
    //   'Livepeer'
    // )

    // const TKN = new Token(
    //   ChainId.MAINNET,
    //   '0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a',
    //   18,
    //   'TKN',
    //   'Monolith'
    // )

    // const BAT = new Token(
    //   ChainId.MAINNET,
    //   '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
    //   18,
    //   'BAT',
    //   'BAT'
    // )

    // const LPTf = await Fetcher.fetchTokenData(chainId, LPT.address)
    // const TKNf = await Fetcher.fetchTokenData(chainId, TKN.address)
    // const BATf = await Fetcher.fetchTokenData(chainId, BAT.address)
    // const input = new TokenAmount(LPT, '1000000000000000000') // .then((val) => (this.lptAmount = val))
    // const output = new TokenAmount(TKN, '7860000000000000000') // .then((val) => (this.lptAmount = val))
    // const HOT_NOT = new Pair(
    //   input,
    //   output
    // )
    // const pair = await Fetcher.fetchPairData(LPTf, WETH[1])
    // const route = new Route([pair], LPT)
    // console.log(route.midPrice.toSignificant(6))
    // console.log(route.midPrice.invert().toSignificant(6))
  }
}
</script>

<style></style>
