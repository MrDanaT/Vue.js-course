<template>
    <ul class="nav nav-pills">
        <li role="presentation">
            <router-link to="/">Home</router-link>
        </li>
        <li role="presentation">
            <router-link to="/user">User</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>