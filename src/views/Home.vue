<template>
  <div id='container'>
    <div id='header'>
      <img style='transform: rotate(-5deg);' src="../assets/POLLy.png">
    </div>
    <div id='slogan-area'>
      <div class='slogan-area-text-container'>
        <div class='slogan-area-text'>
           <h1>Poll your thing</h1>
           <h1 style='font-size: 1.5em;'>easily!</h1>
        </div>
      </div>
    </div>
    <div id='button'>
      <router-link to='/new'><button id='button-area' class='std-button'>Let's go</button></router-link>
    </div>
  </div>
</template>

<style scoped>
  #header {
    padding: 10px;
  }
  #slogan-area {
    font-family: 'Saira';
    font-size: 0.7em;
    position: relative;
  }

@media all and (max-width: 480px) {
  .slogan-area-text {
    margin-top: 40px;
  }
  #slogan-area {
    text-align: center;
    padding-top: 20px;
  }
  #container {
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: 70px 1fr 1fr;
  }
}

@media all and (min-width: 480px) {
  #container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
  }
   #header {
    grid-column: 1/-1;
    padding: 30px;
  }

  #button-area {
    margin-top: 200px;
    margin-bottom: 100px;
  }
  .slogan-area-text-container {
    font-size: 1.4em;
    transform:skewX(-4deg);
    background: white;
    width: 70%;
    height: 40%;
    line-height: 20px;
    padding: 2em;
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 10%;
    top: 10%;
  }
  .slogan-area-text {
    margin-top: 70px;
  }
} 

@media all and (max-width: 680px) {
  .slogan-area-text-container {
    font-size: 1em;
  }
}
</style>