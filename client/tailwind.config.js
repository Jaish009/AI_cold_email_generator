/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef4ff',
                    100: '#d9e5ff',
                    200: '#bcd0ff',
                    300: '#8eb2ff',
                    400: '#5987ff',
                    500: '#3b6cf7',
                    600: '#2451ec',
                    700: '#1c3dd9',
                    800: '#1e34b0',
                    900: '#1e308b',
                },
                dark: {
                    50: '#f6f6f7',
                    100: '#e2e3e5',
                    200: '#c5c6cb',
                    300: '#a0a2a9',
                    400: '#7b7e87',
                    500: '#61636d',
                    600: '#4c4e57',
                    700: '#3e4047',
                    800: '#1a1b23',
                    900: '#0d0e14',
                    950: '#08090d',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-mesh': 'linear-gradient(135deg, #0d0e14 0%, #1a1b2e 25%, #0d0e14 50%, #162044 75%, #0d0e14 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(59, 108, 247, 0.15)',
                'glow-lg': '0 0 40px rgba(59, 108, 247, 0.2)',
                'glow-blue': '0 0 30px rgba(59, 108, 247, 0.3)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            }
        },
    },
    plugins: [],
}
