/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {},
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
