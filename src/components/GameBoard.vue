<template>
  <div class="game-area">
    <div v-for="(cell, index) in cells" :key="index">
      <div class="cell" @click="selectCard(cell)">
        <img :class="{ open: isOpenCard(cell) }" v-if="isSelected(cell)" :src="cell.url">
      </div>
    </div>

    <Modal v-if="isModalShown || isFinished" @start="restart">
      <GetStarted v-if="!isFinished" />
      <Finish v-else/>
    </Modal>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle';
import Modal from './Modal';
import GetStarted from './GetStarted';
import Finish from './Finish';

export default {
  components: {
    Modal,
    Finish,
    GetStarted,
  },
  data: () => ({
    countMoves: 0,
    cells: [],
    isModalShown: true,
    gameOff: false,
    openCards: [],
    selectedCards: [],
    count: 18,
  }),
  watch: {
    isFinished(value) {
      if (value) {
        this.$emit('finish');
      }
    },
  },
  computed: {
    isFinished() {
      return this.openCards.length === this.cells.length;
    },
  },
  methods: {
    genCards() {
      for (let i = 0; i < this.count; i++) {
        this.cells.push({
          url: require(`@/assets/img/image${i + 1}.jpg`),
          id: i,
        });
      }
    },

    restart() {
      this.cells = shuffle(this.cells);
      this.isModalShown = false;
      this.openCards = [];
      this.countMoves = 0;
      this.$emit('start');
    },

    isSelected(cell) {
      return this.selectedCards.includes(cell) || this.isOpenCard(cell);
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
        this.$emit('count', ++this.countMoves);
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
