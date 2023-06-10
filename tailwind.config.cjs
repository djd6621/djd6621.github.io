/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			flex: {
				'2': '2',
				'3': '3',
				'4': '4',
				'5': '5',
				'6': '6',
				'7': '7',
				'8': '8',
				'9': '9',
				'10': '10',
				'11': '11'
			}
		},
	},
	plugins: [require("daisyui")],
};

