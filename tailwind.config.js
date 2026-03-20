/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FF5722', // Deep orange from the reference
                    yellow: '#FFC107',
                    warm: '#FDFBF7', // Warm background
                    text: '#2D3748',
                },
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    500: '#f97316', // Orange-500
                    600: '#ea580c',
                    700: '#c2410c',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}
