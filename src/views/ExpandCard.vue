<script lang='ts' setup>
const panels = ref<Panel[]>([
  {
    link: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore The World',
    active: true,
  },
  {
    link: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Wild Forest',
    active: false,
  },
  {
    link: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    title: 'Sunny Beach',
    active: false,
  },
  {
    link: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    title: 'City On Winter',
    active: false,
  },
  {
    link: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Mountains - Clouds',
    active: false,
  },
])
export interface Panel {
  link: string
  title: string
  active: boolean
}

const clickPanel = (panel: Panel) => {
  panels.value.map(p => p.active = false)
  panel.active = true
}
</script>

<template>
  <div class="container">
    <div
      v-for="(panel) in panels"
      :key="panel.link"
      class="panel"
      :class="{ active: panel.active }"
      :style="{ backgroundImage: `url(${panel.link})` }"
      @click="clickPanel(panel)"
    >
      <h3>{{ panel.title }}</h3>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  display: flex;
  width: 90vw;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;

  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }

  &.active {
    flex: 5;

    h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    }
  }
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>
