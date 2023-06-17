<template>
  <header class="container">

    <div class="row">
      <div class="col-4 mx-auto d-flex justify-content-center">
        <img src="../assets/images/logo-wa-5.png">
      </div>
    </div>

    <div class="we-name row">
      <div class="col-4 mx-auto mt-3 d-flex justify-content-center">
        <span>WhatsApp Easy</span>
      </div>
    </div>

    <div class="we-subtitle row">
      <div class="col mx-auto d-flex justify-content-center">
        <span>WhatsApp without saving contact</span>
      </div>
    </div>
  
  </header>
</template>

<style scoped>

  .we-subtitle {
    text-align: center;
  }
  .we-name span {
    /* color: #25D366; */
    text-align: center;
  }

  img {
    max-width: 27.5%;
  }

  @media (min-width: 768px) {
    .we-name span {
      position: relative;
      font-weight: bolder;
      font-size: x-large;
    }

    .we-name div {
      width: 15rem;
    }
  }  
  
  @media (max-width: 768px) {    
    .we-name span {
      position: relative;
      font-weight: bold;
      font-size: large;
    }
    .we-name div {
      width: 15rem;
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 75%;
    }
  }

  @media (max-width: 576px) {
    img {
      max-width: 90%;
    }
  }

</style>