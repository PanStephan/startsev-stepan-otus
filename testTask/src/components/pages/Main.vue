<template>
  <div class="wrapper">
    <h2>Hi</h2>
    <div class="content">
      Welcome to
      <span>{{getMessage}}</span>
      training day. Your last result: <span>{{lastResult}}</span>
      <span>{{accuracy}}</span>
      <form @submit.prevent="submitHandler">
        <h2>Settings</h2>
        <SettingsController minVal="1" maxVal="10" text="duration" :value.sync="settingsData.duration"/>
        <SettingsController minVal="1" maxVal="15" text="difficulty" :value.sync="settingsData.difficulty"/>
        <RadioButton name="Addition" :value.sync="settingsData.addition"/>
        <RadioButton name="Subtraction" :value.sync="settingsData.subtraction"/>
        <RadioButton name="Multiplication" :value.sync="settingsData.multiplication"/>
        <RadioButton name="Division" :value.sync="settingsData.division"/>
        <RadioButton name="Involution or Raise to power" :value.sync="settingsData.involution"/>
        <SubmitButton text="Play!" />
      </form>
    </div>
<!-- vendord split chinks copywebpackolugin cross env -->
  </div>
</template>
<script>
import SettingsController from '../UI/SettingsController'
import RadioButton from '../UI/Buttons/RadioButton'
import SubmitButton from '../UI/Buttons/SubmitButton'

export default {
  components: {SettingsController, RadioButton, SubmitButton},
  data() {
    return {
      lastResult: 0,
      accuracy: 0,
      settingsData: {
        duration: 1,
        difficulty: 1,
        addition: false,
        subtraction: false,
        multiplication: false,
        division: false,
        involution: false
      }
    }
  },
  computed: {
    getMessage() {
      return this.$store.getters.getTrainingDays
    }
  },
  methods: {
    submitHandler() {
      console.log(this.settingsData)
    }
  }
}
</script>

<style>

</style>