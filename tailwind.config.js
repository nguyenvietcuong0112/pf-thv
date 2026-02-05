/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'kid-green': '#4ADE80',
                'fashion-purple': '#A855F7',
                'salon-pink': '#F472B6',
                'about-pink': '#FCE7F3',
                'title-yellow': '#FDE047',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
