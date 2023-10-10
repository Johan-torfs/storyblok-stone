import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
const env = loadEnv("", process.cwd(), ['STORYBLOK', 'PUBLIC_VERCEL_ENV']);

export default defineConfig({
  output: env.PUBLIC_VERCEL_ENV === 'production' ? 'hybrid' : 'server',
  adapter: vercel(),
  integrations: [tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: true,
    apiOptions: {},
    components: {
      section: '4_layout_elements/Section',
      container: '4_layout_elements/Container',
      grid: '4_layout_elements/Grid',
      flex: '4_layout_elements/Flex',
      column: '4_layout_elements/Column',
      card: '1_molecules/Card',
      alert: '1_molecules/Alert',
      form: '1_molecules/Form',
      navigation: '1_molecules/Navigation',
      link: '1_molecules/Link',
      button: '0_atoms/Button',
      icon_button: '0_atoms/Button',
      theme_button: '0_atoms/Button',
      image: '0_atoms/Image',
      paragraph: '0_atoms/Text',
      title: '0_atoms/Title',
      icon: '0_atoms/Icon',
      input: '0_atoms/Input',
      hamburger: '0_atoms/Hamburger',
      dropdown: '0_atoms/Dropdown',
      score_circle: '0_atoms/custom/ScoreCircle',
    },
    componentsDir: "src",
    enableFallbackComponent: true,
    customFallbackComponent: "",
    useCustomApi: false
  }), svelte()]
});