<template>
  <div id='container'>
    <div id='question-area'>
      <div id='question-content'>
        <h1>Question</h1>
        <input v-model='poll.question' type='text' placeholder='What do you want to question?'>
        <h2>Options</h2>
        <input @keydown.enter='appendOption' v-model='option' type='text' placeholder='Insert your option here'>
        <div>
          <button class='plus-button' @click='appendOption'><span v-if='poll.options.length==6'>Limit reached</span><span v-else>+</span></button>
        </div>
        <ol>
          <li v-for='(option, index) in poll.options' :key='option.id'>Option: {{option.name}} <span @click='deleteOption(index)' id='trash-option'><i class="fas fa-trash-alt"></i></span></li>
        </ol>
      </div>
    </div>
    <div>
      <h1 id='chart-title' style='text-align: center; font-family: "Saira";'>Pick a chart</h1>
      <div id='graph-area'>
        <div v-for='graph in graphs' @click='selectGraph(graph)' :key='graph.id' class='graph-container' :class="{graphActive: graphActive}">
          <i class="fas" :class='`fa-${graph.image}`'></i>
        </div>
      </div>
      <button class='std-button' @click='createPoll'>Finish</button>
      <div id='summary' v-if='createdPoll'>
        <h2>Your poll is ready. Share it with your friends </h2>
        <div>
          <input type='text' style='text-align: center;' :value='pollUrl'>
        </div>
        <div id='summary-icons'>
          <i class="fab fa-facebook" style='color: #3b5998'></i>
          <i class="fab fa-twitter-square" style='color: #0084b4'></i>
          <router-link :to="{ path: 'poll/'+ createdPoll.slug}"><i style='color: green;' class="fas fa-check-square"></i></router-link>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  computed: {
    pollUrl() {
      return `http://192.168.1.122:8080/poll/${this.createdPoll.slug}`
    }
  },
  data() {
    return {
      createdPoll: null,
      graphActive: false,
      graphs: [
        {id: 1, image: 'chart-pie'},
        {id: 2, image: 'chart-bar'},
        {id: 3, image: 'signal'}
      ],
      poll: {
        slug: '',
        graphID: null,
        question: '',
        options: []
      },
      option: '',
    }
  },
  methods: {
    copyUrl() {
    },  
    generateSlug() {
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let slug = ''
      for(let i=0; i<6; i++) {
        slug += possible.charAt(Math.floor(Math.random()*possible.length))
      }
      return slug
    },
    selectGraph(graph) {
      this.graphActive = !this.graphActive
      this.poll.graphID = graph.id
    },  
    appendOption() {
      if(this.option == '') {
        return
      } else if(this.poll.options.length == 6) {
          return alert("The maximum number of options is 6")
      } else {
        this.poll.options.push({
        id: this.poll.options.length + 1,
        name: this.option,
        votes: 0
      })
        this.option = ''
      }
    },
    createPoll() {
      let vm = this;
      this.poll.slug = this.generateSlug()
      firebase.database().ref('polls').push(this.poll)
      .then((response) => {
        let key = response.key
        firebase.database().ref('polls').child(response.key)
        .once('value')
        .then((snapshot) => {
          vm.createdPoll = snapshot.val()
        })
      })
    },
    deleteOption(index) {
      this.poll.options.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  #summary .fas, .fab {
    cursor: pointer;
    font-size: 2.2em;
    margin-right: 5px;
  }
  #summary-icons {
    padding: 10px;
  }
  #summary {
    background: white;
    margin: 20px;
    padding: 20px;
    text-align: center;
  }
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
  .graphActive {
    color: white;
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
    -webkit-appearance: none; border-radius: 0;
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
