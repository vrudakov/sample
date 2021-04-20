<template>
  <header :class="['header', { header_page: $route.name !== 'index' }]">
    <div class="wrapper header__wrapper">
      <div class="header__left">
        <nuxt-link to="/" class="header__logo">
          <img src="../assets/img/icons/logo.svg" alt="logo" />
        </nuxt-link>
        <ul class="header-menu">
          <div class="header-menu__connect">
            <div class="global-input">
              <input type="text" class="global-input__field" required />
              <label class="global-input__text">Введите адрес</label>
              <span class="global-input__error-text">Текст ошибки</span>
            </div>
            <button class="global__btn header-connect__btn">Connect</button>
          </div>
          <li class="header-menu__item">
            <nuxt-link
              to="/"
              class="header-menu__link"
              exact-active-class="active"
            >
              Главная
            </nuxt-link>
          </li>
          <li class="header-menu__item">
            <nuxt-link
              to="/dashboard"
              class="header-menu__link"
              exact-active-class="active"
            >
              Дашборд
            </nuxt-link>
          </li>
          <li class="header-menu__item">
            <nuxt-link
              to="/faq"
              class="header-menu__link"
              exact-active-class="active"
            >
              Справочник
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="header__right">
        <a href="/#" class="header-connect__mobile" @click="connectUser()">
          Connect
        </a>
        <div v-if="!address" class="header-connect">
          <div class="global-input">
            <input type="text" class="global-input__field" required />
            <label class="global-input__text">Введите адрес</label>
            <span class="global-input__error-text">Текст ошибки</span>
          </div>
          <button
            class="global__btn header-connect__btn"
            @click="connectUser()"
          >
            Connect
          </button>
        </div>
        <div v-else class="header-connect__id">
          {{ address }}
        </div>
        <div class="header-lang">
          <img
            src="../assets/img/icons/lang.svg"
            alt="lang"
            class="header-lang__img"
          />
        </div>
        <div class="header-menu-mobile header-menu-mobile_active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainNav',
  computed: {
    ...mapState('user', ['address'])
  },
  methods: {
    connectUser() {
      this.$store.dispatch('user/connectUser')
    }
  }
}
</script>

<style scoped></style>
