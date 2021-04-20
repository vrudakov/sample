<template>
  <div class="calc-block-main">
    <BackButton v-on="$listeners" />
    <span class="calc-block-main__head">Получить xUAH по QR на адрес</span>
    QR code will be here soon
    <!--    <qrcode-->
    <!--      :background="background"-->
    <!--      :size="size"-->
    <!--      :cls="qrCls"-->
    <!--      :value="qrText"-->
    <!--    ></qrcode>-->
    <div class="global-input global-input_qr">
      <input
        v-model="address"
        type="text"
        class="global-input__field"
        value=""
        required=""
      />
      <label class="global-input__text">Адрес</label>
      <span class="global-input__error-text">Текст ошибки</span>
    </div>
    <div class="global-input">
      <input type="text" class="global-input__field" required="" />
      <label class="global-input__text">Сумма</label>
      <span class="global-input__error-text">Текст ошибки</span>
    </div>
    <button class="global__btn">Подтвердить</button>
  </div>
</template>

<script>
import BackButton from '../Buttons/BackButton'
// import Qrcode from '../../node_modules/v-qrcode/src/index'

export default {
  name: 'CalculatorChoiceGetByQr',
  components: {
    BackButton
    // Qrcode
  },
  data() {
    return {
      address: this.$store.state.user.address,
      qrCls: 'calc-block-main__qr-pic',
      qrText: 'Read VueJS Feed daily',
      size: 200,
      background: '#e95f9f'
    }
  }
}
</script>
