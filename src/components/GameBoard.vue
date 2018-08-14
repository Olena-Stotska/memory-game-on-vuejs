<template>
  <div class="game-area">
    <div v-for="(cell, index) in cells" :key="index">
      <div class="cell" @click="selectCard(cell)">
        <img :class="{ open: isOpenCard(cell) }" v-if="isSelected(cell)" :src="cell.url">
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
    gameOff: false,
    openCards: [],
    selectedCards: [],
  }),
  methods: {
    genCards() {
      for (let i = 0; i < 18; i++) {
        this.cells.push({
          url: require(`@/assets/img/image${i + 1}.jpg`),
          id: i,
        });
      }
    },

    shuffle() {
      this.cells = shuffle(this.cells);

      this.isModal = false;
    },

    isSelected(cell) {
      return this.selectedCards.includes(cell) || this.openCards.includes(cell);
    },

    selectCard(cell) {
      if (this.isSelected(cell) || this.gameOff) {
        return;
      }

      if (this.selectedCards.length < 2) {
        this.selectedCards.push(cell);
      }

      if (this.selectedCards.length === 2) {
        this.checkCards();
      }
    },

    checkCards() {
      const cell = this.selectedCards[0];
      const isSame = this.selectedCards.every(el => el.id === cell.id);

      if (isSame) {
        this.openCards.push(...this.selectedCards);
      }

      this.gameOff = true;

      setTimeout(() => {
        this.gameOff = false;
        this.selectedCards = [];
      }, 1500);
    },

    isOpenCard(cell) {
      return this.openCards.includes(cell);
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
  max-width: 615px;
  margin: 0 auto;
}

.cell {
  width: 6rem;
  height: 6rem;
  margin: 3px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #4b258a;
}

.open {
  opacity: 0.9;
}
</style>
