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
        extend: {
            colors: {
                border: "#e8dfec",
                nav: "#fdf9ff",
                home: "#0c3a2f",
                textTitle: "#302e4d",
                textLess: "#504e70",
                textSpan: "#970017",
            },
        },
    },
    plugins: [],
};
