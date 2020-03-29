<template>
  <li class="list-group-item" style="cursor: pointer" @click="serverClicked">Server #{{ server.id }}</li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    serverClicked() {
        serverBus.$emit('serverClicked', this.server);
    }
  }
};
</script>

<style>
</style>
