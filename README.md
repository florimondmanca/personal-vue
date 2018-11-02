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

- Project generated using VueCLI.
- Static typing w/ TypeScript.
- Routing w/ Vue Router.
- State management w/ Vuex (see [src/store](src/store)).
