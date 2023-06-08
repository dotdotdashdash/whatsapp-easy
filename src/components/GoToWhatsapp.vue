<template>

  <div class="submit-btn col-6 col-lg-4 col-xxl-3 p-0 mx-auto mt-4 my-lg-4">
    <a :href="linkToWhatsapp">
      <img
        src="../assets/images/WhatsAppButtonGreenSmall.png"
        class="whatsapp-link-image"
        :class="enableClass"
        alt="dynamic link to open whatsapp">
    </a>   
  </div>

</template>

<script>
  export default {

    data() {
      return {
        cursorType: `pointer`,
        enableClass: ``,
        linkToWhatsapp: `https://api.whatsapp.com/send?phone=`
      }      
    },

    props: {
      enabled: Boolean,
      countryCode: String,
      phoneNumber: String
    },

    mounted() {
      this.enableClass = this.enabled  ? `` : `disable-link`;
    },

    watch: {
      enabled: function(buttonEnabled) {
        this.enableClass = buttonEnabled ? `` : `disable-link`;
        if (buttonEnabled) this.linkToWhatsapp += `${ this.countryCode }${ this.phoneNumber }`;
      }
    }

  }
</script>

<style>

  .whatsapp-link-image {
    cursor: v-bind('cursorType');
  }

  .disable-link {
    display: inline-block;
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

</style>