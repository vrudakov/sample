<template>
  <div class="calc-block-main">
    <BackButton v-on="$listeners" />
    <span class="calc-block-main__head">Connect to a wallet</span>
    <button class="calc-block-main__btn calc-block-main__btn_metamask">
      Metamask
    </button>
    <button class="calc-block-main__btn calc-block-main__btn_trezor">
      Trezor Wallet
    </button>
    <button class="calc-block-main__btn calc-block-main__btn_ledger">
      Ledger Wallet
    </button>
    <input
      type="text"
      class="calc-block-main__input"
      placeholder="Введите адрес вручную"
    />
    <button class="calc-block-main__btn calc-block-main__btn_metamask-gray">
      Скачать Метамаск
    </button>
  </div>
</template>

<script>
import BackButton from '../Buttons/BackButton'

export default {
  name: 'CalculatorChoiceConnectWallet',
  components: {
    BackButton
  },
  data() {
    return {
      address: ''
    }
  }
}
</script>
