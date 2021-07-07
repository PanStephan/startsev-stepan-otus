<template>
  <div class="wrapper">
    <input type="radio" :id="name" @click="onClick" :checked="data">
    <label :for="name">{{name}}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: false
    }
  },
  watch: {
    data() {
      this.$emit('update:value', this.data)
    }
  },
  props: {
    name: {
      required: true,
      type: String
    },
    value: {
      type: Boolean
    }
  },
  methods:{
    onClick() {
      this.data = !this.data
    }
  }
}
</script>

<style>

</style>