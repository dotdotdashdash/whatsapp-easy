<template>

  <div class="submit-btn col-7 col-sm-6 col-md-5 col-lg-4 col-xxl-3 p-0 mx-auto mt-4 my-lg-4">
    <a :href="linkToWhatsapp" :class="enableClass">
      <img
        src="../assets/images/WhatsAppButtonGreenSmall.png"
        class="whatsapp-link-image"
        alt="dynamic link to open whatsapp"
      >
    </a>   
  </div>

</template>

<script>
  export default {

    data() {
      return {
        cursorType: `pointer`,
        enableClass: ``,
        baseUrl: `https://api.whatsapp.com/send?phone=`,
        linkToWhatsapp: `#`
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
      enabled: function(newValue) {
        this.enableClass = newValue ? `` : `disable-link`;

        if (newValue)
          this.linkToWhatsapp = `${ this.baseUrl }${ this.countryCode }${ this.phoneNumber }`;
        else
          this.linkToWhatsapp = `#`;
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

  img {
    width: 100%;
  }

</style>