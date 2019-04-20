<template>
  <div id='container'>
    <div id='question-area'>
      <div id='question-content'>
        <h1>Question</h1>
        <input v-model='poll.question' type='text' placeholder='What do you want to question?'>
        <h2>Options</h2>
        <input @keydown.enter='appendOption' v-model='option' type='text' placeholder='Insert your option here'>
        <div>
          <button class='plus-button' @click='appendOption'>+</button>
        </div>
        <ol>
          <li v-for='(option, index) in poll.options' :key='option.id'>Option: {{option.name}} <span @click='deleteOption(index)' id='trash-option'><i class="fas fa-trash-alt"></i></span></li> 
        </ol>
      </div>
    </div>
    <div>
      <h1 id='chart-title' style='text-align: center; font-family: "Saira";'>Pick a chart</h1>
      <div id='graph-area'>
        <div v-for='graph in graphs' :key='graph.id' class='graph-container'>
          <i class="fas" :class='`fa-${graph.image}`'></i>
        </div>
      </div>
      <button class='std-button' @click='createPoll'>Finish</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      graphs: [
        {id: 1, image: 'chart-pie'},
        {id: 2, image: 'chart-bar'},
        {id: 3, image: 'signal'}
      ],
      poll: {
        question: '',
        options: []
      },
      option: '',
    }
  },
  methods: {
    appendOption() {
      if(this.option == '') {
        return
      } else if(this.poll.options.length == 6) {
          return alert("The maximum number of options is 6")
      } else {
        this.poll.options.push({
        id: this.poll.options.length + 1,
        name: this.option
      })
        this.option = ''
      }
    },
    createPoll() {
      console.log(this.poll)
    },
    deleteOption(index) {
      this.poll.options.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  #trash-option {
    position: relative;
    bottom: 3px;
    background: rgb(235, 212, 7);
    padding: 5px 10px;
    font-size: 0.6em;
    cursor: pointer;
    border-radius: 100%;
  }

  li {
    font-size: 1.4em;
  }
  ol {
    text-align: left;
  }
  .graph-container {
    font-size: 5em;
    text-align: center;
    border: 3px solid black;
    border-radius: 10px;
  }

  .graph-container:hover {
    cursor: pointer;
    border: 3px solid white;
  }

  #container {
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr;
  }

  #question-area {
    text-align: center;
    background: white;
    font-family: 'Saira';
  }

  #graph-area {
    padding: 30px;
    display: grid;
    grid-column-gap: 5%;
    grid-row-gap: 5%;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media all and (max-width: 680px) {
    #graph-area {
       padding: 10px;
    }
    #container {
      grid-template-columns:1fr;
      grid-template-rows: 1fr;
      margin-bottom: 50px;
  }
  #chart-title {
    display: none;
  }

  }
  input {
    width: 80%;
    border: none;
    border-bottom: 2px solid black;
    font-size: 1em;
    padding: 10px;
  }
  input:focus {
    outline: none;
  }
</style>
