module.exports = {
    css: {
        // See: https://cli.vuejs.org/config/#css-loaderoptions
        loaderOptions: {
            sass: {
                // Load these SCSS files into every <style lang="scss">
                data: `@import "@/styles/_variables.scss"; @import "@/styles/_classes.scss";`,
            }
        },
    },
};
