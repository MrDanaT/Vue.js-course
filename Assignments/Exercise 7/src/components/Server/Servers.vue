<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <myserver v-for="server in servers" :server="server"></myserver>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";

export default {
  data() {
    return {
      servers: [
        { id: 1, status: "Unknown" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Critical" },
        { id: 4, status: "Normal" }
      ]
    };
  },
  components: {
    myserver: Server
  }
};
</script>

<style>
</style>
