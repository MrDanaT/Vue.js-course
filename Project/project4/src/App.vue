<template>
  <div class="container">
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes"></quote-grid>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
                Info: Click on a Quote to delete it
            </div>
        </div>
    </div>
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
