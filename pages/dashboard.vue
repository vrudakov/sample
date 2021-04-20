<template>
  <div class="content">
    <section class="dashboard-balance">
      <div class="wrapper">
        <h3 class="dashboard__head">Дашборд</h3>
      </div>
      <div class="wrapper dashboard-balance__wrapper">
        <div class="dashboard-balance__left">
          <div class="dashboard__subhead">Балансы</div>
          <div class="dashboard-balance__block">
            <div class="dashboard-balance__item">
              <div class="dashboard-balance__img">
                <img src="../assets/img/icons/logo_black.svg" alt="icon" />
              </div>
              <div class="dashboard-balance__value">{{ uahBalance }} xUAH</div>
            </div>
            <div class="dashboard-balance__item">
              <div class="dashboard-balance__img">
                <img src="../assets/img/icons/tether.svg" alt="icon" />
              </div>
              <div class="dashboard-balance__value">{{ usdtBalance }} USDT</div>
            </div>
            <div class="dashboard-balance__item">
              <div class="dashboard-balance__img">
                <img src="../assets/img/icons/ethereum.svg" alt="icon" />
              </div>
              <div class="dashboard-balance__value">{{ ethBalance }} ETH</div>
            </div>
          </div>
        </div>
        <Calculator />
      </div>
    </section>
    <section class="dashboard-order">
      <div class="wrapper dashboard-order__top">
        <div class="dashboard__subhead">Лимитный ордер</div>
        <a href="#" class="dashboard-order__create"><span>+</span> Создать</a>
      </div>
      <div class="wrapper dashboard-order__main">
        <table class="table">
          <thead>
            <tr>
              <td>Coin from</td>
              <td>
                Coin to
                <img src="../assets/img/icons/arrow_sort.svg" alt="sort" />
              </td>
              <td>Amount</td>
              <td>Created</td>
              <td>Description</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH</td>
              <td>xUAH</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>Description text can be large</td>
              <td>
                <img
                  class="dashboard-order__close"
                  src="../assets/img/icons/close.svg"
                  alt="close"
                />
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>xUAH</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>Description text can be large</td>
              <td>
                <img
                  class="dashboard-order__close"
                  src="../assets/img/icons/close.svg"
                  alt="close"
                />
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>xUAH</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>Description text can be large</td>
              <td>
                <img
                  class="dashboard-order__close"
                  src="../assets/img/icons/close.svg"
                  alt="close"
                />
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>xUAH</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>Description text can be large</td>
              <td>
                <img
                  class="dashboard-order__close"
                  src="../assets/img/icons/close.svg"
                  alt="close"
                />
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>xUAH</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>Description text can be large</td>
              <td>
                <img
                  class="dashboard-order__close"
                  src="../assets/img/icons/close.svg"
                  alt="close"
                />
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <div class="pagination__item">
            <a href="#" class="pagination__link"
              ><img src="../assets/img/icons/pag_left.svg" alt="prev"
            /></a>
          </div>
          <div class="pagination__item pagination__item_current">
            <a href="#" class="pagination__link">1</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">2</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">3</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">4</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">5</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link"
              ><img src="../assets/img/icons/pag_right.svg" alt="next"
            /></a>
          </div>
        </div>
      </div>
    </section>
    <section class="dashboard-history">
      <div class="wrapper">
        <div class="dashboard__subhead">История</div>
      </div>
      <div class="wrapper dashboard-order__main">
        <table class="table">
          <thead>
            <tr>
              <td>Txn Hash</td>
              <td>
                Age <img src="../assets/img/icons/arrow_sort.svg" alt="sort" />
              </td>
              <td>From</td>
              <td>In/Out</td>
              <td>To</td>
              <td>Value</td>
              <td>Fee</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH</td>
              <td>1</td>
              <td>2,342</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>1</td>
              <td>2,342</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>1</td>
              <td>2,342</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>1</td>
              <td>2,342</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
            <tr>
              <td>ETH</td>
              <td>1</td>
              <td>2,342</td>
              <td>2,342</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>02.04.20</td>
              <td>
                <img
                  src="../assets/img/icons/calc_next.svg"
                  alt="next"
                  class="dashboard-order__next"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <div class="pagination__item">
            <a href="#" class="pagination__link"
              ><img src="../assets/img/icons/pag_left.svg" alt="prev"
            /></a>
          </div>
          <div class="pagination__item pagination__item_current">
            <a href="#" class="pagination__link">1</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">2</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">3</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">4</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link">5</a>
          </div>
          <div class="pagination__item">
            <a href="#" class="pagination__link"
              ><img src="../assets/img/icons/pag_right.svg" alt="next"
            /></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calculator from '../components/Calculator/CalculatorContainer'

export default {
  name: 'Dashboard',
  components: {
    Calculator
  },
  data() {
    return {
      Connected: false
    }
  },
  computed: {
    ...mapState('user', ['uahBalance', 'ethBalance', 'usdtBalance'])
  }
}
</script>

<style scoped></style>
