/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',  // Small shadow
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.25)', // Default shadow
        lg: '3px 3px 6px rgba(0, 0, 0, 0.35)',  // Large shadow
        xl: '4px 4px 8px rgba(0, 0, 0, 0.5)',   // Extra-large shadow
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Add this plugin for text-shadow support
  ],
};
