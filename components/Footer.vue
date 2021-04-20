<template>
  <footer class="footer">
    <div class="wrapper footer__wrapper">
      <div class="footer__item">
        <img
          src="../assets/img/icons/logo.svg"
          alt="logo"
          class="footer__logo"
        />
        <p class="footer__text">
          <b>xUAH</b> - Ваш пропуск в мир децентрализованных финансов DeFi.
        </p>
        <span class="footer__copy">Copyright 2020</span>
      </div>
      <div class="footer__item">
        <ul class="footer-menu">
          <li class="footer-menu__item">
            <a href="#" class="footer-menu__link">О xUAH</a>
          </li>
          <li class="footer-menu__item">
            <a href="#" class="footer-menu__link">Как это работает?</a>
          </li>
          <li class="footer-menu__item">
            <a href="#" class="footer-menu__link">Преимущества</a>
          </li>
          <li class="footer-menu__item">
            <a href="#" class="footer-menu__link">Партнёры</a>
          </li>
        </ul>
      </div>
      <div class="footer__item">
        <div class="footer-soc">
          <span class="footer__head">Мы в соц. сетях</span>
          <div class="footer-soc__wrapper">
            <a href="#" class="footer-soc__link"
              ><img
                src="../assets/img/icons/soc_telegram.svg"
                alt="telegram"
                class="footer-soc__icon"
            /></a>
            <a href="#" class="footer-soc__link"
              ><img
                src="../assets/img/icons/soc_fb.svg"
                alt="facebook"
                class="footer-soc__icon"
            /></a>
            <a href="#" class="footer-soc__link"
              ><img
                src="../assets/img/icons/soc_youtube.svg"
                alt="youtube"
                class="footer-soc__icon"
            /></a>
          </div>
        </div>
        <div class="footer-lang">
          <span class="footer__head">Язык</span>
          <a href="#" class="footer-lang__link"
            ><img
              src="../assets/img/icons/lang.svg"
              alt="lang"
              class="footer-lang__img"
            />Русский</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped></style>
