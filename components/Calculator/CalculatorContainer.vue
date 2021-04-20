<template>
  <div class="calc-block">
    <div class="calc-block-top">
      <button
        v-for="(item, index) in tabs"
        :key="index"
        :class="[
          'calc-block-top__item',
          { 'calc-block-top__item_active': activeTab === item.name }
        ]"
        @click="activeTab = item.name"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="calc-block__wrapper">
      <component :is="activeTabComponent"></component>
    </div>
  </div>
</template>

<script>
import DepositTab from './CalculatorTabDeposit'
import ExchangeTab from './CalculatorTabExchange'
import WithdrawTab from './CalculatorTabWithdraw'

export default {
  name: 'CalculatorContainer',
  data() {
    return {
      tabs: [
        { name: 'deposit', title: 'ПОЛУЧИТЬ', subcomponent: DepositTab },
        { name: 'exchange', title: 'ОБМЕН', subcomponent: ExchangeTab },
        { name: 'withdraw', title: 'ВЫВЕСТИ', subcomponent: WithdrawTab }
      ],
      activeTab: 'deposit'
    }
  },
  computed: {
    activeTabComponent() {
      return this.tabs.find((item) => item.name === this.activeTab).subcomponent
    }
  }
}
</script>
