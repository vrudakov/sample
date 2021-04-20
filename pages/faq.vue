<template>
  <div class="content">
    <section class="faq">
      <h2 class="global__head-page">Справочник</h2>
      <div class="wrapper faq__wrapper">
        <div
          v-for="(faq, index) in faqData"
          :key="index"
          class="faq__item"
          @click="faqData[index].isOpen = !faqData[index].isOpen"
        >
          <div :class="['faq__head', { faq__head_open: faq.isOpen }]">
            {{ faq.title }}
          </div>
          <div class="faq__body">
            <p>{{ faq.body }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      faqData: [
        {
          isOpen: false,
          title: 'Question #42?',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut pharetra sit amet aliquam id. Velit egestas dui id ornare arcu arcu odio. Et ultrices neque ornare aenean euismod. Sed risus pretium quam vulputate dignissim suspendisse in.'
        },
        {
          isOpen: false,
          title: 'Question #2?',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut pharetra sit amet aliquam id. Velit egestas dui id ornare arcu arcu odio. Et ultrices neque ornare aenean euismod. Sed risus pretium quam vulputate dignissim suspendisse in.'
        },
        {
          isOpen: false,
          title: 'Question #3?',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut pharetra sit amet aliquam id. Velit egestas dui id ornare arcu arcu odio. Et ultrices neque ornare aenean euismod. Sed risus pretium quam vulputate dignissim suspendisse in.'
        },
        {
          isOpen: false,
          title: 'Long long question # 2?',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas integer eget aliquet. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut pharetra sit amet aliquam id. Velit egestas dui id ornare arcu arcu odio. Et ultrices neque ornare aenean euismod. Sed risus pretium quam vulputate dignissim suspendisse in.'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
