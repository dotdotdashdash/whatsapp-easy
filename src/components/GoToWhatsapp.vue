<template>

  <div class="submit-btn col-6 col-lg-4 col-xxl-3 p-0 mx-auto mt-4 my-lg-4">      
      <img
        src="../assets/images/WhatsAppButtonGreenSmall.png"
        class="whatsapp-link-image"
        :class="enableDisableClass"
        alt="dynamic link to open whatsapp">
  </div>

</template>

<script>
  export default {
    data() {
      return {

        cursorType: `auto`,

        enableDisableClass: `disable-link`,
        // enableDisableClass: ``

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