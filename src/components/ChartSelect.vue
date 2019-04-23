<template>
  <div>
  <h1 id='chart-title' style='text-align: center; font-family: "Saira";'>Pick a chart</h1>
    <div id='graph-container'>
      <div v-for='graph in graphs' @click='selectGraph(graph)' :key='graph.id' class='graph-container' :class="{graphActive: graphActive}">
        <i class="fas" :class='`fa-${graph.image}`'></i>
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
        {id: 1, image: 'chart-pie'},
        {id: 2, image: 'chart-bar'},
        {id: 3, image: 'signal'}
        ],
      }
  },
  methods: {
    selectGraph(graph) {
      this.graphActive = !this.graphActive
      this.poll.graphID = graph.id
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
</style>

