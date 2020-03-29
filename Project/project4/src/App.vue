<template>
  <div class="container">
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";

export default {
  data() {
    return {
      quotes: ["First Quote"],
      maxQuotes: 10
    };
  },
  components: {
    "quote-grid": QuoteGrid
  }
};
</script>

<style>
</style>
