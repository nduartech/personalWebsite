/** @type {import('tailwindcss').Config} */
export default {
  // separator: '~',
  content: ['./src/**/*.svelte','./src/*.svelte'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'regal-blue-s': {
          '50': '#eef8ff',
          '100': '#ddf2ff',
          '200': '#b3e5ff',
          '300': '#6fd2ff',
          '400': '#23bcff',
          '500': '#00a3ff',
          '600': '#0082dd',
          '700': '#0066b3',
          '800': '#005793',
          '900': '#013f6a',
          '950': '#012d50',
        },
      },
    },
  },
  plugins: [],
}

