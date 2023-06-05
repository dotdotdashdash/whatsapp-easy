<template>

  <div class="container col-lg-9 col-xl-7 col-12 d-flex align-items-c">
    <ul class="col mx-auto">
      <li v-for="infoLine in infoLines">{{ infoLine }}</li>
    </ul>
  </div>

</template>

<script>

export default {
  data() {
    return {
      infoLines: [
        `Type in the number to open your WhatsApp and chat. No need to add a new contact.`,
        `Bookmark or Add to Home Screen this website for easy access.`,
        `Processing is done in your own browser. No details are collected or saved while using this tool.`,
      ]
    }
  }
}

</script>

<style>
  @media (max-width: 576px) {
    li {
      margin-top: 0.5rem;
      font-size: small;
    }
  }

  li {
    margin-top: 0.75rem;
  }

</style>