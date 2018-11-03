<template>
    <nav class="pad-h-responsive">
        <ul>
            <li>
                <h1>
                    <router-link to="/">
                        <span id="brand-long">CodeSail</span>
                        <span id="brand-short">CS</span>
                    </router-link>
                </h1>
            </li>
            <li>
                <input type="search" class="full-width" placeholder="Search">
            </li>
            <li v-if="!loggedIn">
                <router-link :to="{name: 'login'}">
                    Login
                </router-link>
            </li>
            <li v-if="loggedIn">
                <button @click="logout">
                    Logout
                </button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Action, State} from 'vuex-class';
    import {AuthState} from '@/store/auth';
    import {LOGOUT} from '@/store/auth/mutations';

    @Component({
        name: 'TheNavBar',
    })
    export default class TheNavBar extends Vue {

        @State('auth') auth: AuthState;
        @Action(LOGOUT, {namespace: 'auth'}) _logout: any;

        get loggedIn(): boolean {
            return this.auth ? this.auth.isLoggedIn : false;
        }

        logout() {
            this._logout().then(() => this.$router.push({name: 'home'}));
        }
    }
</script>

<style scoped lang="scss">
    nav {
        padding-top: .5em;
        background: white;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-gap: 1em;
            align-items: center;
        }
    }

    h1 {
        font-size: 0.65 * $font-size-h1;
        width: fit-content;
        margin: auto .6em .1em auto;
    }

    #brand-long {
        display: inline-block;
    }

    #brand-short {
        display: none;
    }
</style>