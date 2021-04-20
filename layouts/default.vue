<template>
  <div>
    <MainNav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default {
  components: {
    MainNav,
    Footer
  },
  mounted() {
    window.addEventListener('resize', () =>
      this.$store.commit('common/setWindowWidth')
    )
    window.addEventListener('load', () =>
      this.$store.commit('common/setWindowWidth')
    )
  }
}
</script>
