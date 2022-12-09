/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('./icons/clear-day.svg')",
            },
            colors: {
                'btnBlack': '#1A1A1A',
                'subText': '#BDBDBD',
                'bgGray': '#F6F6F8'
            }
        },
    },
}
