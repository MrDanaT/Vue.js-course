<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      quotes: ["First Quote"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes){
        return alert('Please delete quotes first');
      }
      this.quotes.push(quote);
    },
    deleteQuote(idx) {
      console.log("ee");
      this.quotes.splice(idx, 1);
    }
  },
  components: {
    "quote-grid": QuoteGrid,
    "new-quote": NewQuote,
    'app-header': Header
  }
};
</script>

<style>
</style>
