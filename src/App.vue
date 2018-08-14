<template>
  <div>
    <h1>Memory Game</h1>
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from './components/GameBoard';

export default {
  components: {
    GameBoard,
  },
};
</script>

<style lang="scss">
body {
  font-size: 14px;
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>
