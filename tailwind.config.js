const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {
			translate: ['group-hover'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
