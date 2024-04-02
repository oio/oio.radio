/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode : 'class',
	theme: {
		extend: {
			fontFamily : {
				outfit : ['Outfit', 'sans-serif'], 
				gsans : ['Google Xans', 'sans-serif']
			},
			fontSize : {
				'2xs' : '0.625rem',
				'3xs' : '0.5rem'
			},
			colors: {
				'primary-blue' : '#4870FF',
				'primary-purple' : '#9F86FF',
				'primary-pink' : '#FFB5CD',
				'primary-yellow' : '#FFDD83',
				'secondary-red' : '#FF857B',
				'secondary-cyan' : '#77E7FF',
				'secondary-green' : '#51FFBC',
				'neutral-light' : '#FFFFFF',
				'neutral-dark' : '#000000'
			}
		},
	},
	plugins: [],
}

