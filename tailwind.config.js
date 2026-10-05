/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './template.html',
    './build.js',
    './lib/**/*.js',
    './content/**/*.js',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        appbg: '#F9FAFB',
        alabaster: '#F3F4F6',
        surface: '#FFFFFF',
        line: '#E5E7EB',
        ink: '#111827',
        'vahai-green': '#3A823B',
        'vahai-green-dark': '#29602B',
        'vahai-orange': '#F97316',
        'vahai-orange-dark': '#EA580C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: { page: '72rem' },
    },
  },
  plugins: [],
};
