<template>
  <apexchart width='100%' height='300px' type="donut" :options="chartOptions" :series="series"></apexchart>  
</template>

<script>
export default {
  data() {
    return {
    chartOptions: {
      labels: ["test"],
    plotOptions: {
    radialBar: {
      hollow: {
          size: '30%',
        },
        dataLabels: {
          name: {
            fontSize: '22px',
            color: "black"
          }
        }
      },
    },
  chart: {
    id: 'vuechart-example'
  },
  fill: {
    colors: ['#000']
  },
  xaxis: {
    labels: {
      show: false
    },
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
  },
  series: [30, 40, 35, 50, 49, 60],
  }
  
}
}
</script>