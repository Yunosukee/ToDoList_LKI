export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
	// safelist is used to allow classes to not be purged by tailwind
	safelist: ["alert-info", "alert-success", "alert-warning", "alert-error"],
	theme: {
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	darkMode: "class",
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("daisyui"),
	],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#38bdf8",
					secondary: "#10b981",
					accent: "#f59e0b",
					neutral: "#e5e7eb",
					"base-100": "#f3f4f6",
					info: "#67e8f9",
					success: "#6ee7b7",
					warning: "#fde047",
					error: "#f87171",
				},
			},
			"dark",
		],
	},
};
