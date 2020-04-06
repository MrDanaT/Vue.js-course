<template>
    <div>
        <div class="form-group">
            <label for="firstName">Name: </label>
            <input :value="firstName" @input="nameChanged(true, $event)" class="form-control" id="firstName"
                   type="text">
        </div>

        <div class="form-group">
            <label for="lastName">Name: </label>
            <input :value="lastName" @input="nameChanged(false, $event)" class="form-control" id="lastName" type="text">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        },
        methods: {
            nameChanged(isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' ' + event.target.value;
                }
                this.value = name;
                this.$emit('input', this.value);
            }
        },
        computed: {
            firstName() {
                return this.value.split(' ')[0];
            }, lastName() {
                return this.value.split(' ')[1];
            }
        }
    }
</script>

<style scoped>

</style>