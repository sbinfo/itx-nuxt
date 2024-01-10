// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxtjs/tailwindcss",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Roboto: true,
					Montserrat: {
						wght: [300, 400, 600],
						ital: [300],
					},
					Poppins: {
						wght: [300, 400, 600],
						ital: [300],
					},
				},
			},
		],
	],
})
