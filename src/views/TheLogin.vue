<template>
    <div class="pad-h-responsive">
        <h1>Login</h1>
        <p v-if="error" class="error">
            {{ error }}
        </p>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="username" required placeholder="Username">
            <input type="password" v-model="password" required placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Action, State} from 'vuex-class';
    import {AuthState} from '../store/auth';
    import {LOGIN} from '../store/auth/actions';

    const LOGIN_FAILED_ERROR = 'Could not login using provided credentials';

    @Component({
        name: 'TheLogin',
    })
    export default class TheLogin extends Vue {

        username = '';
        password = '';
        error: string = null;

        @State('auth') auth: AuthState;
        @Action(LOGIN, {namespace: 'auth'}) login: any;

        onSubmit() {
            this.login({
                username: this.username,
                password: this.password,
            })
                .then(() => this.$router.push(this.$route.query['redirect'] || {name: 'home'}))
                .catch(() => {
                    this.error = LOGIN_FAILED_ERROR;
                });
        }
    }
</script>

<style lang="scss" scoped>
    .error {
        color: red;
    }
</style>
