<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">E-mail: </label>
                        <input class="form-control" id="email" type="text" v-model="email"></div>
                    <div class="form-group">
                        <label for="password">Password: </label>
                        <input class="form-control" id="password" type="password" v-model="password"></div>
                    <div class="form-group">
                        <label>
                            <input type="radio" v-model="isStored" value="Yes">Yes
                        </label><label>
                        <input type="radio" v-model="isStored" value="No">No
                    </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <hr>
                    <br>
                    <button @click.prevent="Submit" class="btn btn-primary" id="submitButton" type="submit">Submit!
                    </button>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{isStored}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./components/FullName.vue";

    export default {
        data() {
            return {
                fullName: 'Voornaam Achternaam',
                email: '',
                password: '',
                isStored: 'Yes',
                isSubmitted: false
            }
        },
        methods: {
            Submit() {
                this.isSubmitted = true
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
