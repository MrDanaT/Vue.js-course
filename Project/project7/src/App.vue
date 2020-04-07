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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Mango', 'Melon', 'Banana'],
                filterText: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toString().toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((el) => {
                    return el.match(this.filterText);
                })
            }
        }
    }
</script>

<style>

</style>
