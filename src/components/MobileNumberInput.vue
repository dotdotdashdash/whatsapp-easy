<template>
  <div class="form-floating mb-3">
    <input v-model="phoneNumber" @keyup="createLink" type="text" class="form-control" id="phoneNum" placeholder="9876543210">
    <label for="floatingInput">Mobile Number</label>
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
</style>