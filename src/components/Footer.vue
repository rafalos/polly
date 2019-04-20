<template>
  <div id='footer-container'>
    <i class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter-square"></i>
  </div>
</template>

<style scoped>
  #footer-container {
    background: rgb(0, 0, 0);
    color: white;
    font-size: 2.5em;
    height: 100%;
  }
  .fab {
    margin: 5px;
  }

  @media all and (max-width: 480px) {
    #footer-container {
      font-size: 2em;
    }
  }
</style>
