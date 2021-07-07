<template>
  <div class="wrapper">
    <span>{{minVal}}</span><input type="range" :min="minVal" :max="maxVal" :step="step" v-model="data"/><span>{{maxVal}}</span>
    <div>{{text}}<span>{{data}}</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 0
    }
  },
  watch: {
    data() {
      this.$emit('update:value', parseInt(this.data))
    }
  },
  props: {
    minVal: {
      type: String,
      required: true,
      default: '0'
    },
    maxVal: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: null
    },
    step: {
      type: String,
      default: '1'
    },
    value: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 50px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  border-radius: 3px;
  background: url('../../assets/img/toggler.png') center center no-repeat;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -23px;
  width: 20px;
  height: 20px;
  background-size: 10px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  height: 50px;
  width: 50px;
  border-radius: 3px;
  background-color: transparent;
  background: url('../../assets/img/toggler.png') center center no-repeat;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -23px;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  height: 50px;
  width: 50px;
  border-radius: 3px;
  background-color: transparent;
  background: url('../../assets/img/toggler.png') center center no-repeat;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -23px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
</style>