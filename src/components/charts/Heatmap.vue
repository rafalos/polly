<template>
  <apexchart width='100%' height='300px' type="heatmap" :options="chartOptions" :series="series"></apexchart>  
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        plotOptions: {
          heatmap: {
            radius: 1,
            enableShades: false,
            shadeIntensity: 0.5,
            distributed: false,
            colorScale: {
              inverse: false,
              ranges: [
                {
                  from: 0,
                  to: 30,
                  name: "low",
                  color: "#ddce5a"
                },
                {
                  from: 31,
                  to: 40,
                  name: "medium",
                  color: "#c9bb50"
                },
                {
                  from: 41,
                  to: 50,
                  name: "high",
                  color: "#ada145"
                },
                {
                  from: 51,
                  to: 60,
                  name: "extremeal",
                  color: "#8e8439"
                },
                {
                  from: 61,
                  to: 75,
                  name: "extreme",
                  color: "#776f31"
                },
                {
                  from: 76,
                  to: 100,
                  name: "extreme",
                  color: "#4c471d"
                }
              ]
            }
          }
        },
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          labels: {
            show: false
          },
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>