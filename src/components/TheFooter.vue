<template>
    <footer>
        <hr>
        <ul class="socials">
            <li>
                <a href="https://github.com/florimondmanca" target="_blank" rel="noreferrer"
                   title="GitHub (florimondmanca)">
                    GitHub
                </a>
            </li>
            <li>
                <a href="https://twitter.com/FlorimondManca" target="_blank" rel="noreferrer"
                   title="Twitter (@FlorimondManca)">
                    Twitter
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/florimondmanca" target="_blank" rel="noreferrer"
                   title="LinkedIn (florimondmanca)">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://dev.to/florimondmanca" target="_blank" rel="noreferrer" title="DEV (florimondmanca)">
                    DEV
                </a>
            </li>
            <li>
                <a href="feed://api.florimondmanca.com/blog/feed" title="RSS Feed">
                    RSS
                </a>
            </li>
        </ul>

        <p class="pad-h-sm">
            © {{ year }}
            &middot;
            Made with ✨ by Florimond Manca
        </p>
        <p class="pad-h-sm">
            <!-- TODO: create about page -->
            <router-link to="about">About</router-link>
            &middot;
            <!-- TODO: create privacy-policy page -->
            <router-link to="privacy-policy">Privacy Policy</router-link>
        </p>

    </footer>
</template>

<script>
    import Vue from 'vue';

    export default Vue.component('TheFooter', {
        data() {
            return {
                year: new Date().getFullYear(),
            };
        },
    });
</script>

<style scoped lang="scss">
    footer {
        text-align: center;
        padding: 2em 0;
    }

    ul.socials {
        list-style-type: none;
        width: fit-content;
        margin: 0 auto;
        padding: 1em;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        li {
            margin: .7em;
        }
    }
</style>