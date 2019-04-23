<template>
  <div id='container' v-if='poll'>
    <div id='result' v-if='voted'>
      <div id='result-header'>
        <h1 style='text-align: center; font-family: "Saira";'>{{poll.question}}</h1>
        <button class='std-button' @click='voted=false'>Vote</button>
      </div>
      <div id='chart-container'>
        <apexchart width='80%' height='300px' type="bar" :options="chartOptions" :series="series"></apexchart>  
      </div>
      <div id='chart-selection-container'>
        <char-select></char-select>
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

export default {
  data() {
    return {
      voted: false,
      chartOptions: {
        plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '60%',
            },
          },
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            labels: {
              show: false
            },
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }],
      poll: null
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
    CharSelect
  }
}
</script>

<style>
#result-header {
  grid-column: 1/-1
}
  #result {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px 1fr;
  }
  .option {
    display: inline-block;
    margin: 10px;
  }
  #container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
  }
</style>
