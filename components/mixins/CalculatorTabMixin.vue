<template>
  <div v-if="!isChoiceActive" class="calc-block-main">
    <button
      v-for="(item, index) in choices"
      :key="index"
      class="calc-block-main__btn"
      @click="
        isChoiceActive = true
        activeChoice = item.name
      "
    >
      {{ item.title }}
    </button>
  </div>
  <component
    :is="activeTabComponent"
    v-else
    @choice-back="
      isChoiceActive = false
      activeChoice = null
    "
  ></component>
</template>

<script>
export default {
  data() {
    return {
      isChoiceActive: false,
      activeChoice: null
    }
  },
  computed: {
    activeTabComponent() {
      return this.activeChoice
        ? this.choices.find((item) => item.name === this.activeChoice)
            .choiceComponent
        : null
    }
  }
}
</script>
