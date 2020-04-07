<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase | toLowercase}}</p>
                <hr>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <List></List>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from "./Mixin.js";

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!'
            }
        },
        filters: {
            toUppercase(value) {
                return value.toString().toUpperCase();
            }
        },
        components: {
            List
        }
    }
</script>

<style>

</style>
