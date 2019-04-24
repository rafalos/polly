<template>
  <div id='container' v-if='poll'>
    <div id='result' v-if='voted'>
      <div id='result-header'>
        <h1 style='text-align: center; font-family: "Saira";'>{{poll.question}}</h1>
      </div>
      <div id='chart-container'>
        <Bar v-if='mode===1'></Bar>  
        <Heatmap v-if='mode===2'></Heatmap>
        <Radial v-if='mode===3'></Radial>   
      </div>
      <div id='chart-selection-container'>
        <char-select @graphSelected="changeGraph"></char-select>
        <div @click='voted=false' style='text-align: center; font-size: 1.4em; cursor: pointer;'>
          <span><i class="fas fa-long-arrow-alt-left"></i> Back to voting</span>
        </div>
      </div>
    </div>
    <div if='voting' v-else id='voting'>
      <h1 style='text-align: center; font-family: "Saira";'>{{poll.question}}</h1>
        <label class='option' v-for='option in poll.options' :key='option.id'><input type='radio' :name='option'>{{option.name}}</label>
        <button class='std-button' @click='voted=true'>Check results</button>
        <button class='std-button'>Vote</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import CharSelect from '../components/ChartSelect'
import Bar from '../components/charts/Bar'
import Heatmap from '../components/charts/Heatmap'
import Radial from '../components/charts/Radial'


export default {
  data() {
    return {
      mode : 1,
      voted: false,
      poll: null
    }
  },
  methods: {
    changeGraph(graph) {
      this.mode = graph.id
    }
  },
  created() {
    let vm = this;
    firebase.database().ref('polls').orderByChild('slug').equalTo(this.$route.params.slug).on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      let poll = childSnapshot.val();
      vm.poll = poll
      let options = poll.options.map(x => 
        x.name
      )
      let series = {
        name: poll.question
      }
      let sums = poll.options.map(x => 
        x.votes
      )
      series.data = sums
      vm.chartOptions.xaxis.categories = options
      vm.series[0] = series
    });
  });
  },
  components: {
    CharSelect,
    Bar,
    Heatmap,
    Radial
  }
}
</script>

<style>
  #chart-container {
    width: 100%;
  }
  #result-header {
    grid-column: 1/-1
  }
  #result {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 1fr;
  }
  .option {
    display: inline-block;
    margin: 10px;
  }
  #container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 1fr;
  }
</style>
