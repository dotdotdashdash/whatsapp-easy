<template>
    <mobile-number-input @on-valid-number="loadLink"></mobile-number-input>
    <create-link></create-link>
</template>

<script>
  import MobileNumberInput from './MobileNumberInput.vue';
  import CreateLink from './CreateLink.vue';

  export default {

    components: {
      MobileNumberInput,
      CreateLink
    },

    data() {
      return {}
    },

    methods: {
      loadLink(x, y) {
        console.log(`-------------`, x, y)
      }
    },

  }

</script>

<style>

</style>