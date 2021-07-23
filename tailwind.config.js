module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		extend: {},
	},
	variants: {
		extend: {
			translate: ['group-hover'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
