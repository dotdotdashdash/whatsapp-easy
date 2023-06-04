<template>
    <mobile-number-input @on-valid-number="loadLink"></mobile-number-input>
    <submit-button></submit-button>
</template>

<script>
  import MobileNumberInput from './MobileNumberInput.vue';
  import SubmitButton from './SubmitButton.vue'

  export default {

    components: {
      MobileNumberInput,
      SubmitButton
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