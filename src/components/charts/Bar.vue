<template>
  <apexchart width='100%' height='300px' type="bar" :options="chartOptions" :series="series"></apexchart>  
</template>

<script>
export default {
  data() {
    return {
    chartOptions: {
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "90%",
        colors: {
          ranges: ['white'],
        }
      },
    },
    colors: ['#000'],
  chart: {
    id: 'vuechart-example'
  },
  dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex]
            },
          },
  xaxis: {
    labels: {
      show: false
    },
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  },
  grid: {
    show: false,
  },
   yaxis: {
            labels: {
              show: false
            }
          }
  },
  series: [{
    data: [30, 40, 35, 50, 49, 60, 70, 91]
  }],
    }
  }
  
}
</script>