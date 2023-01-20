/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            border: "#ebebde",
            nav: "#777764",
            home: "#ebebde",
            textTitle: "black",
            textLess: "#4f4747",
            textSpan: "#970017",
            pink: "#F88379",
            gray: "#808080",
        },
        extend: {},
    },
    plugins: [],
};
