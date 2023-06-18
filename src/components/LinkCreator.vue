<template>

  <div>
    <mobile-number-input
      @on-valid-number="loadLink"
      :maxlength="maxlength"
    ></mobile-number-input>
  </div>

  <div>
    <go-to-whatsapp
      :enabled="enabled"
      :country-code="countryCode"
      :phone-number="phoneNumber"
    ></go-to-whatsapp>
  </div>
    
</template>

<script>
  import MobileNumberInput from './MobileNumberInput.vue';
  import GoToWhatsapp      from './GoToWhatsapp.vue';

  export default {

    components: {
      MobileNumberInput,
      GoToWhatsapp
    },

    data() {
      return {
        enabled: false,
        maxlength: 25,
        countryCode: ``,
        phoneNumber: ``
      }
    },

    methods: {
      loadLink(inputNumber, numberObject) {
        this.enabled = numberObject.valid;
        this.countryCode = numberObject.countryCallingCode
        this.phoneNumber = numberObject.nationalNumber
      }
    },

  }

</script>