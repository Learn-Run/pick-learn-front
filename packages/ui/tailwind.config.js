/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                },
                secondary: {
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                },
                tertiary: {
                    100: 'var(--color-tertiary-100)',
                    200: 'var(--color-tertiary-200)',
                    300: 'var(--color-tertiary-300)',
                },
                gray: {
                    100: 'var(--color-gray-100)',
                    200: 'var(--color-gray-200)',
                    300: 'var(--color-gray-300)',
                    400: 'var(--color-gray-400)',
                    500: 'var(--color-gray-500)',
                    600: 'var(--color-gray-600)',
                    700: 'var(--color-gray-700)',
                    800: 'var(--color-gray-800)',
                    900: 'var(--color-gray-900)',
                },
                point: {
                    green: {
                        100: 'var(--color-point-green-100))',
                        200: 'var(--color-point-green-200))',
                    },
                    blue: {
                        100: 'var(--color-point-blue-100))',
                        200: 'var(--color-point-blue-200))',
                    },
                    yellow: {
                        100: 'var(--color-point-yellow-100))',
                        200: 'var(--color-point-yellow-200))',
                    },
                },
                error: {
                    DEFAULT: 'var(--color-error))',
                    100: 'var(--color-error-100)',
                    200: 'var(--color-error-200)',
                },
                black: 'var(--color-black))',
            },
        },
    },
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    ],
};
