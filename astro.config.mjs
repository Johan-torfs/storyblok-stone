import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), ['STORYBLOK', 'PUBLIC_VERCEL_ENV', ]);

// https://astro.build/config
export default defineConfig({
  output: env.PUBLIC_VERCEL_ENV === 'production' ? 'hybrid' : 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {},
      components: {
        section: '4_layout_elements/Section',
        container: '4_layout_elements/Container',
        grid: '4_layout_elements/Grid',
        flex: '4_layout_elements/Flex',
        card: '1_molecules/Card',
        button: '0_atoms/Button',
        image: '0_atoms/Image',
        paragraph: '0_atoms/Text',
        title: '0_atoms/Title',
        icon_button: '0_atoms/IconButton',
        score_circle: '0_atoms/ScoreCircle',
        alert: '1_molecules/Alert',
      },
      componentsDir: "src",
      enableFallbackComponent: true,
      customFallbackComponent: "",
      useCustomApi: false
    })
  ],
});