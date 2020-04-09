<template>
    <div>
        <h3>Some User Details</h3>
        <hr>
        <p>User loaded has ID: {{$route.params.id}}</p>
        <router-link :to="{name: 'userEdit', params: {id: $route.params.id}}" class="btn btn-primary" tag="button">Edit
            User
        </router-link>
    </div>
</template>