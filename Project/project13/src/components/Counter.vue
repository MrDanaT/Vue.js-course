<template>
    <div>
        <button @click="increment(100)" class="btn btn-primary">Increment</button>
        <button @click="decrement(500)" class="btn btn-primary">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        methods: {
            ...mapMutations(['increment', 'decrement'])
        }
    }
</script>