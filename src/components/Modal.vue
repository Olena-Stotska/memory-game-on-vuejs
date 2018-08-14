<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body" @click="$emit('start')">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, .2);
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9998;
}

.modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease;
}

.modal-body {
  background: #000;
  color: #fff;
  padding: 50px;
  cursor: pointer;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
