<template>

    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <submit-button
            :content="'Submit'"
            v-bind="props"
          ></submit-button>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <!-- <v-toolbar              
              color="teal-lighten-1"
              title="WhatsApp Easy"
            ></v-toolbar> -->
              <div class="pa-8 pt-10">      
                <a href="#">
                  <img src="../assets/images/WhatsAppButtonGreenSmall.png" alt="">
                </a>
              </div>
            <v-card-actions class="justify-center">
              <submit-button
                :content="'Close'"
                @click="isActive.value = false"
              ></submit-button>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

</template>

<script>
  import SubmitButton from './SubmitButton.vue'

  export default {
    components: {
      SubmitButton
    }
  }
</script>

<style>

img {
  width: 100%;
}

</style>