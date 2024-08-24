/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                gulax: ["Gulax", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                background: "#F0EBE1",
                "primary-color-1": "#9FDC26",
                "primary-color-2": "#F29C33",
                "primary-color-3": "#EE6352",
                "primary-color-4": "#C4E5FC",
                light: "#FFFBF2",
                dark: "#262522",
                "gray-1": "#9f9c95",
                "gray-2": "#595856",
            },
        },
    },
    plugins: ["flowbite/plugin"],
};
