<script lang='ts' setup>
const currentActive = ref<number>(1)

const prevBtnDisabled = computed<boolean>(() => {
  return currentActive.value === 1
})

const nextBtnDisabled = computed<boolean>(() => {
  return currentActive.value === 4
})

const clickPrev = () => {
  currentActive.value -= 1

  if (currentActive.value < 1)
    currentActive.value = 1
}

const clickNext = () => {
  currentActive.value += 1

  if (currentActive.value > 4)
    currentActive.value = 4
}
</script>

<template>
  <div class="container">
    <div class="progress-container">
      <div class="progress" />
      <div
        v-for="index in 4"
        :key="index"
        class="circle"
        :class="{ active: index === currentActive }"
      >
        {{ index }}
      </div>
    </div>
    <button id="prev" class="btn" :disabled="prevBtnDisabled" @click="clickPrev">
      Prev
    </button>
    <button id="next" class="btn" :disabled="nextBtnDisabled" @click="clickNext">
      Next
    </button>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

$line-border-fill: #3498db;
$line-border-empty: #e0e0e0;

* {
  box-sizing: border-box;
}

body {
  background-color: #f6f7fb;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;

  &::before {
    content: '';
    background-color: $line-border-empty;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
}

.progress {
  background-color: $line-border-fill;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid $line-border-empty;
  transition: 0.4s ease;

  &.active {
    border-color: $line-border-fill;
  }
}

.btn {
  background-color: $line-border-fill;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: $line-border-empty;
    cursor: not-allowed;
  }
}
</style>
