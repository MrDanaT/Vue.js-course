<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button @click="submit" class="btn btn-primary">Submit!</button>
                <hr>
                <button @click="fetchData" class="btn btn-primary">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.username}} / {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit() {
                // console.log(this.user);
                this.$http
                    .post('https://vue-course-7056e.firebaseio.com/data.json', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.error(error);
                    });
            },
            fetchData() {
                this.$http
                    .get('https://vue-course-7056e.firebaseio.com/data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    })
            }
        }
    }
</script>

<style>
</style>
