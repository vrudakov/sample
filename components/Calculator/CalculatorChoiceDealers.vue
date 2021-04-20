<template>
  <div class="calc-block-main">
    <BackButton v-on="$listeners" />
    <span class="calc-block-main__head">Список диллеров</span>
    <span class="calc-block-main__subhead">Место для объсняющего текста</span>
    <button class="calc-block-main__btn calc-block-main__btn_btcu-biz">
      btcu.biz
    </button>
    <button class="calc-block-main__btn calc-block-main__btn_btcu-ua">
      btcu.ua
    </button>
    <button class="calc-block-main__btn calc-block-main__btn_money24">
      money24
    </button>
  </div>
</template>

<script>
import BackButton from '../Buttons/BackButton'

export default {
  name: 'CalculatorChoiceDealers',
  components: {
    BackButton
  }
}
</script>
