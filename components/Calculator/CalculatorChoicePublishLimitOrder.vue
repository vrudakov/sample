<template>
  <div class="calc-block-main">
    <BackButton v-on="$listeners" />
    <span class="calc-block-main__head">Разместить лимитный ордер</span>
    <div class="calc-block-main__group">
      <div class="global-input">
        <input type="text" class="global-input__field" required="" />
        <label class="global-input__text">Сумма</label>
        <span class="global-input__error-text">Текст ошибки</span>
      </div>
      <div class="global-select">
        <select class="global-select__field">
          <option>ETH</option>
          <option>ETH2</option>
          <option>ETH3</option>
        </select>
        <label class="global-select__text">Монета from</label>
      </div>
    </div>
    <div class="calc-block-main__group">
      <div class="global-input">
        <input type="text" class="global-input__field" required="" />
        <label class="global-input__text">Сумма</label>
        <span class="global-input__error-text">Текст ошибки</span>
      </div>
      <div class="global-select">
        <select class="global-select__field">
          <option>ETH</option>
          <option>ETH2</option>
          <option>ETH3</option>
        </select>
        <label class="global-select__text">Монета from</label>
      </div>
    </div>
    <div class="global-input">
      <input type="text" class="global-input__field" required="" />
      <label class="global-input__text">Курс</label>
      <span class="global-input__error-text">Текст ошибки</span>
    </div>
    <div class="calc-block-main__group">
      <span class="calc-block-main__text">Продолжительность</span>
      <div class="global-input">
        <input type="text" class="global-input__field" required="" />
        <label class="global-input__text">Часы</label>
        <span class="global-input__error-text">Текст ошибки</span>
      </div>
      <div class="global-input">
        <input type="text" class="global-input__field" required="" />
        <label class="global-input__text">Минуты</label>
        <span class="global-input__error-text">Текст ошибки</span>
      </div>
    </div>
    <button class="global__btn">Разместить</button>
  </div>
</template>

<script>
import BackButton from '../Buttons/BackButton'

export default {
  name: 'CalculatorChoicePublishLimitOrder',
  components: {
    BackButton
  }
}
</script>
