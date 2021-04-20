<script>
import CalculatorTabMixin from '../mixins/CalculatorTabMixin'
import DealersBuyChoice from './CalculatorChoiceDealers'
import GetByQrChoice from './CalculatorChoiceGetByQr'

export default {
  name: 'CalculatorDeposit',
  mixins: [CalculatorTabMixin],
  data() {
    return {
      choices: [
        {
          name: 'dealers-buy',
          title: 'Купить xUAH у дилеров',
          choiceComponent: DealersBuyChoice
        },
        {
          name: 'get-by-qr',
          title: 'Получить xUAH по QR на адрес',
          choiceComponent: GetByQrChoice
        }
      ]
    }
  }
}
</script>
