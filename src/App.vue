<template>
  <div id="app">
    <div id='header'>
      <img alt="Vue logo" src="./assets/POLLy.png">
    </div>
    <div id='slogan'>
      <h1>Poll your thing</h1>
      <h1 style='font-size: 1.5em;'>easily</h1>
    </div>
    <div id='button'>
      <button class='std-button'>Let's go</button>
    </div>
    <div id='footer'>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter-square"></i>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.std-button {
  display: block;
  width: 150px;
  height: 56px;
  background: rgb(255, 255, 255);
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Roboto';
  font-size: 1.2em;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 15px;
}
html, body {
  background: rgb(235, 212, 7);
  height: 100%;
  margin: 0;
}

@media all and (max-width: 480px) {
  #slogan {
    text-align: center;
    padding: 20px;
  }
  #app {
    height: 100%;
    display: grid;
    grid-template-columns:1fr;
    grid-template-areas:
              "header"
              "slogan"
              "button"
              "footer";
    grid-template-rows: 70px 1fr 1fr 50px;
  }
}

@media all and (min-width: 480px) {
  #app {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
}

@media all and (min-width: 1024px) {
  #app {
    display: grid;
    grid-template-columns: repeat(12, 1fr)
  }
}
.fab {
  margin-right: 10px;
}
 #header {
    grid-column: 1/-1;
    padding: 10px;
  }
  #slogan {
    font-family: 'Saira';
    font-size: 0.7em;
  }
  #footer {
    background: rgb(0, 0, 0);
    color: white;
    font-size: 2em;
    padding: 10px;
  }
</style>
