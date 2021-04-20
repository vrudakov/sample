<template>
  <a class="calc-block-main__back" @click="$emit('choice-back')">
    <img src="../../assets/img/icons/calc_prev.svg" alt="prev" />
  </a>
</template>

<script>
export default {
  name: 'BackButton'
}
</script>
