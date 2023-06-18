<template>
  <header class="container">

    <div class="row">
      <div class="col-4 mx-auto d-flex justify-content-center">
        <img
          width="100%"
          height="100%"
          alt="logo for whatsapp easy"
          src="../assets/images/logo-wa-5.png"
        >
      </div>
    </div>

    <div class="we-name row">
      <div class="col-4 mx-auto mt-3 d-flex justify-content-center">
        <h1>WhatsApp Easy</h1>
      </div>
    </div>

    <div class="we-subtitle row">
      <div class="col mx-auto d-flex justify-content-center">
        <h1>WhatsApp without saving contact</h1>
      </div>
    </div>
  
  </header>
</template>

<style scoped>

  .we-subtitle h1 {
    text-align: center;
    font-size: large;
    font-weight: 600;
  }
  .we-name h1 {
    text-align: center;
  }

  img {
    max-width: 27.5% !important;
    display: block;
  }

  @media (min-width: 768px) {
    .we-name h1 {
      position: relative;
      font-weight: bolder;
      font-size: x-large;
    }

    .we-name div {
      width: 15rem;
    }
  }  
  
  @media (max-width: 768px) {    
    .we-name h1 {
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
      max-width: 75% !important;
      display: block;
    }
  }

  @media (max-width: 576px) {
    img {
      max-width: 90% !important;
      display: block;
    }
  }

</style>