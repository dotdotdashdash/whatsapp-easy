<template>

  <div>
    <mobile-number-input @on-valid-number="loadLink"></mobile-number-input>
  </div>

  <div>
    <go-to-whatsapp></go-to-whatsapp>
  </div>
    
</template>

<script>
  import MobileNumberInput from './MobileNumberInput.vue';
  import CreateLink        from './CreateLink.vue';
  import GoToWhatsapp      from './GoToWhatsapp.vue';

  export default {

    components: {
      MobileNumberInput,
      CreateLink,
      GoToWhatsapp
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