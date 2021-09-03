module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                projects: {
                    pomi: '#86E2D5',
                    wraptown: '#1D4ED8',
                    hogsmeade: '#1D172C',
                },
            },
            width: {
                164: '164px',
                300: '300px',
                640: '640px',
                720: '720px',
                1080: '1080px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
