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
      section: '4_layout_elements/_dto/SectionDTO',
      container: '4_layout_elements/_dto/ContainerDTO',
      grid: '4_layout_elements/_dto/GridDTO',
      flex: '4_layout_elements/_dto/FlexDTO',
      column: '4_layout_elements/_dto/ColumnDTO',
      styleguide_element: '2_components/_dto/StyleguideElementDTO',
      card: '1_molecules/Card',
      accordeon: '1_molecules/Accordeon',
      alert: '1_molecules/Alert',
      form: '1_molecules/Form',
      navigation: '1_molecules/_dto/NavigationDTO',
      link: '1_molecules/_dto/LinkDTO',
      list: '1_molecules/_dto/ListDTO',
      list_item: '1_molecules/_dto/ListItemDTO',
      button: '0_atoms/Button',
      icon_button: '0_atoms/Button',
      theme_button: '0_atoms/Button',
      image: '0_atoms/Image',
      paragraph: '0_atoms/Text',
      title: '0_atoms/_dto/TitleDTO',
      icon: '0_atoms/_dto/IconDTO',
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