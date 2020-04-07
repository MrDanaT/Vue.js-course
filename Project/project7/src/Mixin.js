export const fruitMixin = {
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
    },
    created() {
        console.log("Crated Mixin!");
    }
};