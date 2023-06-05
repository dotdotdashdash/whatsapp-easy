<template>

  <div class="submit-btn col-4 col-lg-2 p-0 mx-auto mt-2 my-lg-4">
    <v-btn
      block
      color="teal-lighten-1"
    >
      {{ content }}
    </v-btn>
  </div>

</template>

<script>
  export default {
    
    props: {
      content: String
    }

  }
</script>

<style>
</style>