<script>
import CalculatorTabMixin from '../mixins/CalculatorTabMixin'
import ExchangeByMarketOrder from './CalculatorChoiceExchangeByMarketOrder'
// import PublishLimitOrder from './CalculatorChoicePublishLimitOrder'
import DealersExchange from './CalculatorChoiceDealers'

export default {
  name: 'CalculatorExchange',
  mixins: [CalculatorTabMixin],
  data() {
    return {
      choices: [
        {
          name: 'exchange-by-market-order',
          title: 'Обмен по Маркет Ордеру',
          choiceComponent: ExchangeByMarketOrder
        },
        {
          name: 'publish-limit-order',
          title: 'Разместить Лимитный Ордер',
          choiceComponent: ExchangeByMarketOrder
        },
        {
          name: 'dealers-exchange',
          title: 'Обмен у дилера на другую валюту',
          choiceComponent: DealersExchange
        }
      ]
    }
  }
}
</script>
