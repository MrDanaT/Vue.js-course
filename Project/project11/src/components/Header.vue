<template>
    <ul class="nav nav-pills">
        <router-link active-class="active" exact tag="li" to="/"><a>Home</a></router-link>
        <router-link active-class="active" tag="li" to="/user/1"><a>User 1</a></router-link>
        <router-link active-class="active" tag="li" to="/user/2"><a>User 2</a></router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>