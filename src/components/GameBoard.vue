<template>
  <div class="game-area">
    <div v-for="(cell, index) in cells" :key="index">
      <div class="cell">
        <img :src="cell">
      </div>
    </div>

    <Modal v-if="isModal" @start="shuffle" >
      <GetStarted />
    </Modal>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle';
import Modal from './Modal';
import GetStarted from './GetStarted';

export default {
  components: {
    Modal,
    GetStarted,
  },
  data: () => ({
    cells: [],
    isModal: true,
  }),
  methods: {
    genCards() {
      for (let i = 0; i < 18; i++) {
        this.cells.push(require(`@/assets/img/image${i + 1}.jpg`));
      }
    },

    shuffle() {
      this.cells = shuffle(this.cells);

      this.isModal = false;
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
