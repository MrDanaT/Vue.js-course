<template>
    <ul class="nav nav-pills">
        <router-link active-class="active" exact tag="li" to="/"><a>Home</a></router-link>
        <router-link active-class="active" tag="li" to="/user/10"><a>User</a></router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>