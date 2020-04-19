<template>
    <div>
        <button @click="increment(100)" class="btn btn-primary">Increment</button>
        <button @click="decrement(50)" class="btn btn-primary">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                increment: types.COUNTER_INCREMENT,
                decrement: types.COUNTER_DECREMENT
            })
        }
    }
</script>