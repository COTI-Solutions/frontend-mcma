/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#F4E1D5',
                    light: '#FAF0EA',
                    dark: '#E8D0C0',
                },
                primary: {
                    50: '#FAF4F4',
                    100: '#F2E4E5',
                    200: '#E5C9CB',
                    300: '#D1A0A3',
                    400: '#9E5054',
                    500: '#6A2226',
                    600: '#5C1D21',
                    700: '#4E191C',
                    800: '#401417',
                    900: '#320F12',
                },
                secondary: {
                    50: '#F5F4F0',
                    100: '#EBE9E1',
                    200: '#D7D4C4',
                    300: '#C3BFA7',
                    400: '#A3A07F',
                    500: '#848058',
                    600: '#72704C',
                    700: '#606040',
                    800: '#4E5034',
                    900: '#3C4028',
                },
                accent: {
                    50: '#FDF8F3',
                    100: '#F9EDE0',
                    200: '#F0D9C0',
                    300: '#E4C19A',
                    400: '#D4A574',
                    500: '#C49060',
                    600: '#A67850',
                    700: '#886040',
                    800: '#6A4830',
                    900: '#4C3020',
                },
            },
            fontFamily: {
                sans: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
                display: ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
                body: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
                ui: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
                '144': '36rem',
            },
            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                '3xl': '1920px',
                '4xl': '2560px',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
