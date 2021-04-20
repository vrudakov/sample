<template>
  <div class="calc-block-main">
    <BackButton v-on="$listeners" />
    <span class="calc-block-main__head">Вывести на xUAH адрес</span>
    <div class="global-input global-input_qr">
      <input
        v-model="To"
        class="global-input__field"
        required=""
        type="text"
        value=""
      />
      <label class="global-input__text">Адрес</label>
      <span class="global-input__error-text">Текст ошибки</span>
    </div>
    <div class="global-input">
      <input
        v-model="Amount"
        type="text"
        class="global-input__field"
        required=""
      />
      <label class="global-input__text">Сумма</label>
      <span class="global-input__error-text">Текст ошибки</span>
    </div>
    <button class="global__btn" @click="sendUAH">Подтвердить</button>
  </div>
</template>

<script>
import BackButton from '../Buttons/BackButton'
// import web3 from '../helper/web3'
import contract from '../../helper/contract'

export default {
  name: 'CalculatorChoiceWithdrawToAddress',
  components: {
    BackButton
  },
  data() {
    return {
      To: '0xC304fB56a77b01213D552AFCd9c4822b16c9A1ee', // TODO изменить хардкод
      Amount: 0
    }
  },
  methods: {
    async sendUAH() {
      if (window.ethereum.selectedAddress === null) {
        window.ethereum.enable()
      }
      const txData = contract.methods.transfer(this.To, this.Amount).encodeABI()

      const transactionParameters = {
        gasPrice: '0xD8111C400', // customizable by user during MetaMask confirmation. TODO сделать автоподсчет
        gas: '0xC350', // customizable by user during MetaMask confirmation.
        to: '0xBb573bD1613Fd635c4872690078D0Eb799FCB0d2', // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        chainId: window.ethereum.chainId,
        data: txData
        // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      }

      // eslint-disable-next-line no-console
      console.log(transactionParameters)
      await window.ethereum.request(
        {
          method: 'eth_sendTransaction',
          params: [transactionParameters]
        },
        (error, txHash) => {
          // eslint-disable-next-line no-console
          console.log('Transaction Hash:', txHash, error)
        }
      )
    }
  }
}
</script>
