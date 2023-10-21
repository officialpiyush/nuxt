import { env } from 'std-env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'opinionated nuxt',
      meta: [
        {
          name: 'description',
          content: 'an opinionated nuxt starter template',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/oink.svg',
        },
      ],
    },
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@sidebase/nuxt-auth'],
  css: [
    '@unocss/reset/tailwind.css',
    'notivue/notifications.css',
    'notivue/animations.css',
  ],
  imports: {
    imports: [
      {
        name: 'nanoid',
        from: 'nanoid',
      },
      {
        name: 'consola',
        from: 'consola',
      },
    ],
  },
  runtimeConfig: {
    auth: {
      SECRET: env.AUTH_SECRET as string,
      DISCORD_CLIENT_ID: env.DISCORD_CLIENT_ID as string,
      DISCORD_CLIENT_SECRET: env.DISCORD_CLIENT_SECRET as string,
    },
  },
})
