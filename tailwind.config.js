/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			transitionDuration: {
				DEFAULT: "333ms",
			},
			transitionTimingFunction: {
				DEFAULT: "ease-in-out",
			},
		},
	},
	daisyui: {
		themes: ["cupcake", "sunset"],
	},
	plugins: [require("daisyui")],
}
