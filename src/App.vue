<template>
<div id='app'>
  <transition name="page" mode="out-in">
    <router-view></router-view>
  </transition>
      <div id='footer'>
        <Footer></Footer>
    </div>
</div>
</template>

<script>
import Footer from './components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style>
  html, body {
    background: rgb(235, 212, 7);
    height: 100%;
    margin: 0;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  .std-button {
    display: block;
    width: 200px;
    height: 56px;
    background: rgb(255, 255, 255);
    border: none;
    font-family: 'Roboto';
    font-size: 1.2em;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
}

.plus-button {
    border: none;
    width: 80%;
    margin: 5px;
    height: 50px;
    color: white;
    background: rgb(235, 212, 7);
    font-size: 2em;
    cursor: pointer;
  }

.std-button:focus {
  outline: none;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s, transform .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

#app {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
@media all and (max-width: 480px) {
  #footer {
    position: fixed;
    bottom:0;
    width: 100%;
  }
}


</style>
