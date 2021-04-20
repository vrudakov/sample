<template>
  <div class="calc-block-main">
    <BackButton v-on="$listeners" />
    <span class="calc-block-main__head">Обмен по Маркет Ордеру</span>
    <iframe
      class="calc-block-main__exchange-iframe"
      src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
    />
  </div>
</template>

<script>
import BackButton from '../Buttons/BackButton'
export default {
  name: 'CalculatorChoiceExchangeByMarketOrder',
  components: {
    BackButton
  }
}
</script>
