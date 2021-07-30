<template>
  <img :src="imgSrc()" :alt="alt" class="article-image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>

<style scoped>
.article-image {
  width: 50%;
  border: 1px solid #B5E0E7;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
}
</style>