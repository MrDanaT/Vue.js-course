<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fruits: ['Apple', 'Mango', 'Melon', 'Banana'],
                filterText: ''
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
