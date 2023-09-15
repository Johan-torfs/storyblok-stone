import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), ['STORYBLOK', 'PUBLIC_VERCEL_ENV', ]);

// https://astro.build/config
export default defineConfig({
  output: env.PUBLIC_VERCEL_ENV === 'production' ? 'static' : 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {},
      // storyblok-js-client options
      components: {
      },
      componentsDir: "src",
      enableFallbackComponent: true,
      customFallbackComponent: "",
      useCustomApi: false
    })
  ],
});