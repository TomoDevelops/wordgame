/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                100: "notosans-thin",
                200: "notosans-extralight",
                300: "notosans-light",
                400: "notosans-regular",
                500: "notosans-medium",
                600: "notosans-semibold",
                700: "notosans-bold",
                800: "notosans-extrabold",
                900: "notosans-black",
            },
        },
    },
    plugins: [],
};
