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
        fontFamily: {
            'montserrat': ['Montserrat','sans-serif']
        },
        extend: {
            colors: {
                // untuk bg
                whiteMain: '#f3f3f3',
                // untuk text
                blackMain: '#222222',
                // untuk hover
                blackSecondary: '#222628',
                // untuk bg-itme yang item
                blackThird: '#323332',
                // untuk text higlight kecil
                blueMain: '#488cb9',
                // untuk button
                blueSecondary: '#2980b9',

            },
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
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
