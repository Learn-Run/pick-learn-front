import type { Config } from 'tailwindcss';
import baseConfig from '../../packages/ui/tailwind.config.js';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
    presets: [baseConfig],
};

export default config;
