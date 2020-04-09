<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="nagivateToHome" class="btn btn-primary">Go Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>
<script>
    export default {
        methods: {
            nagivateToHome() {
                this.$router.push({path: '/'});
            }
        }
    }
</script>