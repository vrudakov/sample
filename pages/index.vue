<template>
  <div class="content">
    <Calculator v-if="screenWidth <= 568"></Calculator>
    <section class="first-screen">
      <div class="wrapper-first first-screen__wrapper">
        <div class="first-screen__left">
          <h1 class="first-screen__head">
            <b>xUAH</b> - Ваш пропуск в мир децентрализованных финансов DeFi.
          </h1>
          <div class="first-screen__btns">
            <a href="#" class="global__btn global__btn_dark">Стать партнёром</a>
            <a href="#" class="first-screen__video-btn">
              <img src="../assets/img/icons/play.svg" alt="play" />
              Смотреть видео
            </a>
          </div>
        </div>
        <div class="first-screen__right">
          <h1 class="first-screen__head first-screen__head_right">
            <b>xUAH</b> - Ваш пропуск в мир децентрализованных финансов DeFi.
          </h1>
          <img
            src="../assets/img/vernadsky.png"
            alt="vernadsky"
            class="first-screen__img"
          />
        </div>
      </div>
    </section>
    <section class="calc">
      <div class="wrapper calc__wrapper">
        <div class="calc__left">
          <img
            src="../assets/img/icons/logo_blue.svg"
            alt="calc logo"
            class="calc__logo"
          />
          <p class="calc__text">
            xUAH (или Эксгривна) - <a href="#">токен</a> в формате ERC20 для
            обеспечения ликвидности на децентрализованных биржах криптовалютных
            активов на платформе Ethereum.
          </p>
        </div>
        <Calculator v-if="screenWidth > 568"></Calculator>
      </div>
    </section>
    <section class="about">
      <div class="wrapper about__wrapper">
        <div class="about__left">
          <h4 class="about__head">Про xUAH</h4>
          <p class="about__text">
            Правительство может легко запретить вам обменивать ваши деньги на
            доллары или евро или отправлять их за границу. Эксгривна может быть
            обменена на тезер, даи или любой другой стейблкоин
          </p>
        </div>
        <img
          src="../assets/img/about_img.png"
          alt="about pic"
          class="about__img"
        />
      </div>
    </section>
    <section class="why">
      <h3 class="global__head">Почему эксгривна лучше, чем гривна?</h3>
      <div class="wrapper why__wrapper">
        <div class="why__item">
          <img src="../assets/img/shevchenko.png" alt="pic" class="why__pic" />
          <div class="why__block">
            <span class="why__head">#1</span>
            <p class="why__text">
              Правительство может легко запретить вам обменивать ваши деньги на
              доллары или евро или отправлять их за границу. Эксгривна может
              быть обменена на тезер, даи или любой другой стейблкоин,
              номирированный в дол или евро автоматически на децентрализованной
              бирже и никто не сможет вам этого запретить.
            </p>
          </div>
        </div>
        <div class="why__item">
          <div class="why__block">
            <span class="why__head">#2</span>
            <p class="why__text">
              При правильной работе с приватным ключом и сидфразой Эксгривна не
              может быть потеряна, украдена или конфискована.
            </p>
          </div>
          <img src="../assets/img/ukrainka.png" alt="pic" class="why__pic" />
        </div>
        <div class="why__item">
          <img src="../assets/img/vernadsky.png" alt="pic" class="why__pic" />
          <div class="why__block">
            <span class="why__head">#3</span>
            <p class="why__text">
              Формируется целый новый мир децентрализованных финансов. На этом
              можно и нужно зарабатывать. Мы будем писать об этом объективно и
              всесторонне
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="how-it-work">
      <h3 class="global__head">Как это работает?</h3>
      <hr class="global__hr" />
      <h4 class="global__subhead">Покупка эксгривны за гривны.</h4>
      <div class="wrapper how-it-work__wrapper">
        <div class="how-it-work__step">
          <div class="how-it-work__pic">
            <img
              src="../assets/img/icons/telegram.svg"
              alt="icon"
              class="how-it-work__icon"
            />
          </div>
          <span class="how-it-work__head">Шаг 1</span>
          <p class="how-it-work__text">
            Находите <a href="#">партнеров</a>, частных продавцов, в
            <a href="#">телеграмм группе</a>
          </p>
        </div>
        <div class="how-it-work__step">
          <div class="how-it-work__pic">
            <img
              src="../assets/img/icons/uah.svg"
              alt="icon"
              class="how-it-work__icon"
            />
          </div>
          <span class="how-it-work__head">Шаг 2</span>
          <p class="how-it-work__text">Перечисляете гривну</p>
        </div>
        <div class="how-it-work__step">
          <div class="how-it-work__pic">
            <img
              src="../assets/img/icons/qu_icon_gray.svg"
              alt="icon"
              class="how-it-work__icon"
            />
          </div>
          <span class="how-it-work__head">Шаг 3</span>
          <p class="how-it-work__text">Даете свой адрес в блокчейне эфира</p>
        </div>
        <div class="how-it-work__step">
          <div class="how-it-work__pic">
            <img
              src="../assets/img/icons/logo_gray.svg"
              alt="icon"
              class="how-it-work__icon"
            />
          </div>
          <span class="how-it-work__head">Шаг 4</span>
          <p class="how-it-work__text">Получаете эксгривну</p>
        </div>
      </div>
    </section>
    <section class="change">
      <hr class="global__hr" />
      <h4 class="global__subhead">Обмен с/на токены ERC20 или ETH.</h4>
      <div class="wrapper change__wrapper">
        <div class="change__item">
          <img
            src="../assets/img/change_pic_1.png"
            alt="pic"
            class="change__pic"
          />
          <div class="change__block">
            <span class="change__head">#1</span>
            <p class="change__text">
              Заходите на децентрализованную биржу юнисвоп или на
              <a href="#">нашу биржу</a>
            </p>
          </div>
        </div>
        <div class="change__item">
          <img
            src="../assets/img/change_pic_2.png"
            alt="pic"
            class="change__pic"
          />
          <div class="change__block">
            <span class="change__head">#2</span>
            <p class="change__text">
              Вводите что на что хотите поменять и подписываете транзакцию
              приватным ключом.
            </p>
          </div>
        </div>
        <div class="change__item">
          <img
            src="../assets/img/change_pic_3.png"
            alt="pic"
            class="change__pic"
          />
          <div class="change__block">
            <span class="change__head">#3</span>
            <p class="change__text">
              Обмен происходит в блокчейне эфира автоматически.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="partners">
      <h3 class="global__head">Партнёры</h3>
      <p class="partners__text">
        Формируется целый новый мир децентрализованных финансов. На этом можно и
        нужно зарабатывать. Мы будем писать об этом объективно и всесторонне
      </p>
      <div class="wrapper partners__wrapper">
        <img
          src="../assets/img/partners_pic_1.png"
          alt="pic"
          class="partners__img"
        />
        <img
          src="../assets/img/partners_pic_2.png"
          alt="pic"
          class="partners__img"
        />
        <img
          src="../assets/img/partners_pic_3.png"
          alt="pic"
          class="partners__img"
        />
      </div>
    </section>
    <section class="offers">
      <div class="offers__block offers__left">
        <span class="offers__head">Станьте партнёром</span>
        <p class="offers__text">
          На этом можно и нужно зарабатывать. Мы будем писать об этом объективно
          и всесторонне
        </p>
        <a href="#" class="global__btn">Стать партнёром</a>
      </div>
      <div class="offers__block offers__right">
        <span class="offers__head">Купить xUAH</span>
        <p class="offers__text">
          На этом можно и нужно зарабатывать. Мы будем писать об этом объективно
          и всесторонне
        </p>
        <a href="#" class="global__btn">Купить xUAH</a>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Calculator from '../components/Calculator/CalculatorContainer'

export default {
  components: {
    Calculator
  },
  computed: {
    ...mapState('common', ['screenWidth'])
  }
}
</script>
