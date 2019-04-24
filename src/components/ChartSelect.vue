<template>
  <div>
  <h1 id='chart-title' style='text-align: center; font-family: "Saira";'>Switch chart mode</h1>
    <div id='graph-container'>
      <div v-for='graph in graphs' @click='selectGraph(graph)' :key='graph.id' class='graph-container' :class="{graphActive: graphActive}">
        <i class="fas" :class='`fa-${graph.image}`'></i>
        <div style='font-size: .3em;'>{{graph.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      graphActive: false,
      graphs: [
        {id: 1, image: 'bars', name: 'Bar'},
        {id: 2, image: 'grip-horizontal', name: 'Heatmap'},
        {id: 3, image: 'chart-pie', name: 'Radial'}
        ],
      }
  },
  methods: {
    selectGraph(graph) {
      this.$emit('graphSelected', graph)
    }
  }
}
</script>

<style scoped>
 #graph-container {
    padding: 30px;
    display: grid;
    grid-column-gap: 5%;
    grid-row-gap: 5%;
    grid-template-columns: 1fr 1fr 1fr;
  }

.graph-container {
    font-size: 5em;
    text-align: center;
    border-radius: 10px;
    transition: 0.3s;
  }

  .graph-container:hover {
    color: white;
    cursor: pointer;
  }
  .graphActive {
    color: white;
    border: 3px solid white;
  }
</style>

