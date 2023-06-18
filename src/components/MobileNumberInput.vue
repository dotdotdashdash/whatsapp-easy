<template>
  <div class="container col-lg-9 col-xl-7 col-12">

    <div class="number-input">
      <vue-tel-input 
        v-model="phoneNumber"
        :dropdown-options="dropdownOptions"
        :input-options="inputOptions"
        :preferred-countries="preferredCountries"
        mode="international"
        @on-input="createLink"
        validCharactersOnly
        :autoFormat="false"
      >
      </vue-tel-input>
    </div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        phoneNumber:  ``,

        dropdownOptions: {
          showSearchBox: true,
          showFlags: true,
          showDialCodeInSelection: true,
          showDialCodeInList: true,
        },

        preferredCountries: [ "in" ],

        inputOptions: {
          placeholder: `Input a valid phone number`,
          autofocus: true,
          type: `tel`,
          maxlength: this.maxlength
        },
      }
    },

    props: {
      maxlength: Number
    },

    methods: {      
      createLink(number, phoneObject) {
        this.$emit(`onValidNumber`, number, phoneObject);        
      }
    },

  }
</script>

<style>
  .number-input .vti__country-code {
    font-size: medium;
    color:black
  }
</style>