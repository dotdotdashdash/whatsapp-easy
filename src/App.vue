<template>
  <div class="container-fluid vh-100 col-sm-12 col-md-11 col-lg-9 col-xl-8">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="create-link">
      <link-creator></link-creator>
    </div>
    <div class="">
      <verbiage></verbiage>
    </div>
  </div>
</template>

<script>
  import { RouterView } from "vue-router";
  import AppHeader from "./components/AppHeader.vue";
  import LinkCreator from "./components/LinkCreator.vue";
  import Verbiage from "./components/Verbiage.vue";

  export default {

    components: {
      AppHeader,
      LinkCreator,
      RouterView,
      Verbiage
    },

    data() {
      return {}
    },

  }
</script>

<style>

  .create-link {
    margin-top: 5rem;    
  }
  .header {
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    .create-link {
      margin-top: 3rem;    
    }
    .header {
      margin-top: 1rem;
    }
  }


</style>