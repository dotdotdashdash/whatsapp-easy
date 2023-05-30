<template>
  <div>
    <app-header></app-header>
    <hr>
    <link-creator></link-creator>
  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import LinkCreator from "./components/LinkCreator.vue";

  export default {
    data() {
      return {}
    },

    components: {
      AppHeader,
      LinkCreator,
    }
  }
</script>