<template>

<div class="input-group mb-3">
  <input id="country-code" type="text" class="form-control" placeholder="Country Code" aria-label="Username">
  <input id="contact-number" type="text" class="form-control" placeholder="Contact Number" aria-label="Server">
</div>


</template>

<script>
  import 'intl-tel-input/build/css/intlTelInput.css'
  // import intlTelInput from "intl-tel-input";

  export default {
    data() {
      return {
        phoneNumber:  ``,
        link: `https://api.whatsapp.com/send?phone=91`
      }
    },

    methods: {      
      createLink() {
        if (this.phoneNumber.length != 10) return;
        let whatsappLink = `${this.link}${this.phoneNumber}`;
        this.$emit(`link-generated`, whatsappLink);        
      }
    },

    mounted() {
      // intlTelInput(document.getElementById(`phoneNum`));
    }
  }
</script>

<style scoped>

  #country-code {
    width: 12.5%;
  }
</style>