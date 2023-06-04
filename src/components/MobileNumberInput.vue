<template>
  <div class="container col-lg-9 col-xl-7 col-12">

    <div class="number-input">
      <vue-tel-input 
        v-model="phoneNumber"
        :dropdown-options="dropdownOptions"
        :input-options="inputOptions"
        :preferred-countries="preferredCountries"
        @on-input="createLink">
      </vue-tel-input>
    </div>

  </div>
</template>

<script>

  export default {
    data() {

      return {
        phoneNumber:  ``,

        link: `https://api.whatsapp.com/send?phone=91`,

        dropdownOptions: {
          showSearchBox: true,
          showFlags: true
        },

        preferredCountries: [ "in", `us`],

        inputOptions: {
          placeholder: `Input a valid phone number`
        },
      }

    },

    methods: {      
      createLink(number, phoneObject) {

        console.log(`\n\n>>>>>------${new Date().toLocaleTimeString('en-us',{timeZone: 'Asia/Calcutta'})}------->>\n | file: MobileNumberInput.vue:48 | number, phoneObject:`, phoneObject.countryCallingCode, phoneObject.nationalNumber);

        this.$emit(`linkgenerated`, `whatsappLink`);        
      }
    },

  }
</script>

<style>

  .number-input input {
    width: 300rem;
    /* border */
  }

  .number-input input {
    border-radius: 4px;
  }

</style>