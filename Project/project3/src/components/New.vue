<template>
  <div>
      <h3>New Quote</h3>
      <button @click="counter++">Increase Counter</button>
      <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
data(){
    return{
        counter: 0
    }
},
destroyed(){
    console.log('Destroy');
},
deactivated(){
    console.log('Deactivated');
},
activated(){
    console.log('Activated');
},
}
</script>

<style>

</style>