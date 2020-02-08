<template>
  <button type="submit">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>