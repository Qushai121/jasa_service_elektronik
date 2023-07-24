import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],


    theme: {
        extend: {
            keyframes: {
                translateX: {
                    '0%': { transform: 'translateX(-900px)' },
                    '100%': { transform: 'translateX(900px)' },
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'spin-slow': 'spin 50s linear infinite',
                'translateX-status': 'translateX 15s linear infinite',
            }
        },
    },

    plugins: [
        forms,
        require("daisyui"),
        require('tailwind-scrollbar'),
    ],
};
