<template>
  <div class='container'>
    <my-header></my-header>
    <hr />
    <div class='row'>
      <my-servers></my-servers>
      <my-server-details></my-server-details>
    </div>
    <hr />
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerDetails from './ServerDetails.vue';
import Servers from './Servers.vue';

export default {
  components: {
    'my-footer': Footer,
    'my-header': Header,
    'my-server-details': ServerDetails,
    'my-servers': Servers
  }
};
</script>

<style>
</style>
