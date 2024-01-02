/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      colors: {
        "blog-yellow": "var(--blog-yellow)",
        "blog-grey": "var(--blog-grey)",
        "blog-black": "var(--blog-black)"
      }
    },
	},
	plugins: [],
};

