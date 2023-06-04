<template>
  <header class="container">

    <div class="row">
      <div class="col-4 mx-auto d-flex justify-content-center">
        <img src="../assets/images/logo-basic-7-1.png">
      </div>
    </div>

    <div class="wae-name row">
      <div class="col-4 mx-auto d-flex justify-content-center">
        <span>WhatsApp Easy</span>
      </div>
    </div>
  
  </header>
</template>

<style scoped>

  @media (min-width: 768px) {
    .wae-name span {
      position: relative;
      /* bottom: 20px; */
      font-weight: bolder;
      font-size: x-large;
      color: #128c7e;
      text-align: center;
    }

    .wae-name div {
      width: 15rem;
    }
  }  
  
  @media (max-width: 768px) {
    .wae-name span {
      position: relative;
      /* bottom: 10px; */
      font-weight: bold;
      font-size: large;
      color: #128c7e;
      text-align: center;
    }

    .wae-name div {
    width: 15rem;

    }
  }

  img {
    max-width: 30%;
  }

  @media (max-width: 768px) {
    img {
      max-width: 80%;
    }
  }

  @media (max-width: 576px) {
    img {
      max-width: 100%;
    }
  }

</style>