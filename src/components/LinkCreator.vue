<template>
    <mobile-number-input @linkgenerated="loadLink"></mobile-number-input>
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
      loadLink(x) {
        console.log(`-------------`, x)
      }
    },

  }

</script>

<style>

</style>