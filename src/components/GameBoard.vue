<template>
  <div class="game-area">
    <div v-for="(cell, index) in cells" :key="index">
      <div class="cell">
        <img :src="cell">
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data: () => ({
    cells: [],
  }),
  methods: {
    genCards() {
      for (let i = 0; i < 18; i++) {
        this.cells.push(require(`@/assets/img/image${i + 1}.jpg`));
      }
    },
  },

  created() {
    this.genCards();
    this.genCards();
  },
};
</script>

<style scoped lang="scss">
.game-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.cell {
  width: 6rem;
  height: 6rem;
  margin: 10px;
  border-radius: 10px;
  background-color: #4b258a;
}
</style>
