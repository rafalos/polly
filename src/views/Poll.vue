<template>
  <div id='container'>
    <h1>{{poll.question}}</h1>
    <div v-if='poll'>
     <apexchart width="700px" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
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
  }
}
</script>