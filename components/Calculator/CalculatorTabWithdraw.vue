<script>
import CalculatorTabMixin from '../mixins/CalculatorTabMixin'
import WithdrawToAddress from './CalculatorChoiceWithdrawToAddress'
import SellToDealer from './CalculatorChoiceDealers'

export default {
  name: 'CalculatorWithdraw',
  mixins: [CalculatorTabMixin],
  data() {
    return {
      choices: [
        {
          name: 'withdraw-to-address',
          title: 'Вывести на xUAH адрес',
          choiceComponent: WithdrawToAddress
        },
        {
          name: 'sell-to-dealer',
          title: 'Продать через диллера',
          choiceComponent: SellToDealer
        }
      ]
    }
  }
}
</script>
