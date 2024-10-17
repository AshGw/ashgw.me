import { Plugin } from 'postcss';

const config: {
  plugins: {
    [key: string]: Plugin | NonNullable<unknown>;
  };
} = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
