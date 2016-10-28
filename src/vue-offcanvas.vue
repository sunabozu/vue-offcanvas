<script>
export default {
  data() {
    return {
      visible: false
    }
  },

  props: {
    value: {
      type: Boolean
    },

    width: {
      type: Number,
      default: 270
    },

    duration: {
      type: Number,
      default: 0.2
    },

    effect: {
      type: String,
      default: 'linear'
    },

    closeOnExternalClick: {
      type: Boolean,
      default: true
    },

    closeOnEsc: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    'value' (val) {
      setTimeout(() => this.toggle(val))
    },

    'duration' (val) {
      this.setupBody({})
    },

    'effect' (val) {
      this.setupBody({})  
    }
  },

  methods: {
    setupBody({ duration = this.duration, effect = this.effect }) {
      let timingFunction = ''

      switch(effect) {
        case 'bounce':
          timingFunction = 'cubic-bezier(0, 1.1, 0.8, 1.1)'
          break

        default:
          timingFunction = this.effect
          break
      }

      document.body.style.transition = `transform ${duration}s ${timingFunction}`
      document.body.style.overflowX = 'hidden'
    },

    clickOutside(e) {
      if(!this.$el.contains(e.target) && this.visible) {
        this.toggle(false)
      }
    },

    esc(e) {
      if(e.keyCode !== 27)
        return

      this.toggle(false)
    },

    toggle(show) {
      if(show) {
        document.body.style.transform = `translateX(${this.width}px)`
        this.visible = true
      } else {
        this.$emit('input', false)
        document.body.style.transform = 'translateX(0)'
        setTimeout(() => this.visible = false, this.duration * 1000)
      }
    }
  },

  created() {
    this.setupBody({})

    if(this.closeOnExternalClick)
      setTimeout(() => document.addEventListener('click', this.clickOutside))


    if(this.closeOnEsc)
      setTimeout(() => document.addEventListener('keydown', this.esc))
  },

  beforeDestroy() {
    if(this.closeOnExternalClick)
      document.removeEventListener('click', this.clickOutside)

    if(this.closeOnEsc)
      document.removeEventListener('keydown', this.esc)
  }
}
</script>

<template>
  <div
    style="position: fixed; left: 0; top: 0; bottom: 0; height: 100vh;"
    :style="{ 'width': width + 'px', 'transform': `translateX(-${width}px)` }">
    <slot v-if="visible"></slot>
  </div>
</template>