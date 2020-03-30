<template>
  <div class="container">
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

export default {
  data() {
    return {
      quotes: ["First Quote"],
      maxQuotes: 10
    };
  },
  methods:{
      newQuote(quote){
          this.quotes.push(quote);
      }
  },
  components: {
    "quote-grid": QuoteGrid,
    "new-quote": NewQuote
  }
};
</script>

<style>
</style>
