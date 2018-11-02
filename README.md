# personal-vue

This project is home to a partial Vue remake of the [Angular frontend app](https://github.com/florimondmanca/personal) for my personal blog.

## Install

First, install NPM dependencies:

```bash
npm install
```

Then, create an environment file called `.env.development.local` at the project root, with the following variables:

- `VUE_APP_API_TOKEN`, `VUE_APP_API_SECRET_KEY`: valid API token and secret key created via the API administration.
- `VUE_APP_BACKEND_URL`: the URL to the backend root (without trailing slash).

For example:

```dotenv
VUE_APP_API_TOKEN=mytoken
VUE_APP_API_SECRET_KEY=mysecretkey
VUE_APP_BACKEND_URL=http://localhost:8000
```

## Quickstart

Compilation and hot-reloading for development:

```bash
npm run serve
```

Production build:

```bash
npm run build
```

## Highlights

Features:

- Post feed
- Post detail
- Posts by tag

Technologies:

- Project generated using [Vue CLI 3](https://cli.vuejs.org).
- Static typing w/ [TypeScript](https://vuejs.org/v2/guide/typescript.html).
- Routing w/ [Vue Router](https://router.vuejs.org).
- State management w/ [Vuex](https://vuex.vuejs.org) (see [src/store](src/store)).
- TypeScript-friendly Vuex w/ [vuex-class](https://github.com/ktsn/vuex-class).
- HTTP requests w/ [Axios](https://github.com/axios/axios).
- Styling w/ SASS.
- Markdown rendering w/ [Marked.js](https://marked.js.org) (syntax highlighting w/ [hightlight.js](https://highlightjs.org)).

TODO:

- Material components w/ [Vuetify](https://vuetifyjs.com).
- Infinite scroll on post feed
