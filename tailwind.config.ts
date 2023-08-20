import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultConfig';

const config: Config = {
  mode:'jit',
  // add this section to resolve
  corePlugins: {
    preflight: true
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    ...defaultTheme.theme,
    colors: {
      ...defaultTheme.colors,

      primary: '#009865',
      white: '#ffffff',
      lightGreen: '#E9ECEF',
      gray: '#F4F4F4',
      black: '#212121',
      text: {
        DEFAULT: '#1F2937',
        light: '#6C7281'
      },
      light: {
        DEFAULT: '#FAFBFC',
        lighter: '#F3F4F6'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
