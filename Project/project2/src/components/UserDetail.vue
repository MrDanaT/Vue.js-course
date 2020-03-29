<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
    <p>User Age: {{userAge}}</p>
    <button @click="resetName">Reset the name</button>
    <button @click="resetFn()">Reset the name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      default: 'Dana'
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName(){
        this.myName = 'Dana';
        this.$emit('nameWasReset', this.myName);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
