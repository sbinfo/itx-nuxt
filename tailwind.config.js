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
		colors: {
			"itx-heading": "#fff",
			"itx-border": "#354a77",
			"itx-success": "#24e9b3",
			"itx-primary": "#25f3f5",
			"itx-secondary": "#8a8a8a",
			"itx-warning": "#e5901d",
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"base-100": "#1f2937",
					primary: "#0e7490",
					secondary: "#4b5563",
					accent: "#111827",
					neutral: "#242e3d",
					info: "#0369a1",
					success: "#047857",
					warning: "#a16207",
					error: "#be123c",
				},
			},
		],
	},
	plugins: [require("daisyui")],
}
