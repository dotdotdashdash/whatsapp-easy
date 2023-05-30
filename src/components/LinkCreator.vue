<template>
    <div class="container col-xl-10 col-xxl-8 px-4 ">
      <div class="row align-items-center g-lg-5 py-3">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Whatsapp Without Saving Contact</h1>
          <p class="col-lg-10 fs-4">Want to text someone on Whatsapp without adding a new contact? <br> Input the number here </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5" >
          <div class="p-4 p-md-5 rounded-3 bg-light">
            <mobile-number-input @link-generated="loadLink"></mobile-number-input>
            <div class="container redirectContainer" style="display: none;">
              <div class="row">
                <div class="align-self-center">
                  <a id="redirect" href="#"><button style="background-color: #128c7e;" class="w-100 btn btn-lg btn-primary">WhatsApp me!</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import MobileNumberInput from './MobileNumberInput.vue';

  export default {
    data() {
      return {}
    },

    methods: {
      loadLink(x) {
        console.log(`-------------`, x)
      }
    },

    components: {
      MobileNumberInput
    }
  }

</script>

<style>

</style>