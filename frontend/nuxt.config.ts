// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import { resolve } from 'path'
// @ts-ignore
import {resolve} from "path";
// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    alias: {
        public: resolve(__dirname, './public/')
    },
    dir: {
        public: resolve(__dirname, './public/')
    },
    generate: {
        routes: ['/'],
        // subFolders: true
    },
    ssr: false,
    srcDir: 'src/',
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'My App',
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },
    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },
    typescript: {
        strict: true,
    },
    // auth: {
    //     strategies: {
    //         cookie: {
    //             endpoints: {
    //                 csrf: {
    //                     url: '/sanctum/csrf-cookie'
    //                 },
    //                 login: {
    //                     url: '/login'
    //                 },
    //                 logout: {
    //                     url: '/logout'
    //                 },
    //                 user: {
    //                     url: '/user'
    //                 }
    //             },
    //             user: {
    //                 property: 'data'
    //             },
    //         }
    //     },
    //
    //     redirect: {
    //         login: '/login',
    //         logout: '/login',
    //         home: '/'
    //     },
    //
    //     plugins: ['~/plugins/axios'],
    // },

    // axios: {
    //     baseURL: 'http://ergodnc.test',
    //     credentials: true,
    // },
    modules: ['@pinia/nuxt'],
    vite: {
        logLevel: 'info'
    },
    publicRuntimeConfig: {
        baseSocket: process.env.BASE_SOCKET
    },
    privateRuntimeConfig: {}
})
