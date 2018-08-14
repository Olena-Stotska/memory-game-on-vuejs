<template>
  <div>
    <h1>Memory Game</h1>
    <div class="details-game">
      <span>Time: <Timer :disabled="isTimerDisabled" /></span>
      <span>Moves: {{ counter }} </span>
    </div>
    <GameBoard
      @count="counter = $event"
      @start="isTimerDisabled = false; counter = 0"
      @finish="isTimerDisabled = true"
    />
  </div>
</template>

<script>
import Timer from './components/Timer';
import GameBoard from './components/GameBoard';

export default {
  components: {
    GameBoard,
    Timer,
  },
  data: () => ({
    counter: 0,
    isTimerDisabled: true,
  }),
};
</script>

<style lang="scss">
body {
  font-size: 14px;
  text-align: center;
  padding: 0;
  margin: 0;
}

.details-game {
  margin-bottom: 10px;

  span {
    font-weight: 900;
    font-size: 1.2rem;
    padding: 0 20px;
  }
}
</style>
