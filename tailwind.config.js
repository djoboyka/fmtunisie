/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: '#374151', // gray-700
						maxWidth: 'none',
						h1: {
							color: '#164E63', // mediterranean-blue-800
							fontWeight: '700',
						},
						h2: {
							color: '#164E63', // mediterranean-blue-800
							fontWeight: '700',
						},
						h3: {
							color: '#155E75', // mediterranean-blue-700
							fontWeight: '600',
						},
						h4: {
							color: '#1F2937', // gray-800
							fontWeight: '600',
						},
						strong: {
							color: '#111827', // gray-900
							fontWeight: '600',
						},
						a: {
							color: '#0E7490', // mediterranean-blue-600
							textDecoration: 'none',
							fontWeight: '500',
							'&:hover': {
								color: '#155E75', // mediterranean-blue-700
								textDecoration: 'underline',
							},
						},
						blockquote: {
							borderLeftColor: '#0891B2', // mediterranean-blue-500
							backgroundColor: '#EBF8FF', // mediterranean-blue-50
							fontStyle: 'italic',
						},
						code: {
							color: '#0E7490', // mediterranean-blue-600
							backgroundColor: '#F3F4F6', // gray-100
						},
					},
				},
			},
			colors: {
				// Premium Mediterranean color palette
				mediterranean: {
					blue: {
						50: '#EBF8FF',
						100: '#D1EEFC',
						200: '#A7D8F0',
						300: '#7CC1E4',
						400: '#52AAD8',
						500: '#0891B2', // Rich turquoise
						600: '#0E7490',
						700: '#155E75',
						800: '#164E63',
						900: '#083344',
					},
					sand: {
						50: '#FDFCFB',
						100: '#F9F6F1',
						200: '#F1EBE1',
						300: '#E8DFD1',
						400: '#DFD3C1',
						500: '#C8B99A', // Warm sand
						600: '#B09A7E',
						700: '#8C7A62',
						800: '#685A46',
						900: '#443A2A',
					},
					coral: {
						50: '#FFF4ED',
						100: '#FFE4D1',
						200: '#FFC9A3',
						300: '#FFAD75',
						400: '#FF9247',
						500: '#F97316', // Warm coral accent
						600: '#EA580C',
						700: '#C2410C',
						800: '#9A3412',
						900: '#7C2D12',
					},
					white: '#FFFFFF',
					cream: '#FFFBF7',
				},
				// Functional colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0891B2', // Mediterranean blue
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#C8B99A', // Sand
					foreground: '#083344',
				},
				accent: {
					DEFAULT: '#F97316', // Coral accent
					foreground: '#FFFFFF',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
				display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'zoom-in': 'zoom-in 0.6s ease-out',
				'shimmer': 'shimmer 2s linear infinite',
				'float': 'float 3s ease-in-out infinite',
			},
			boxShadow: {
				'premium': '0 10px 40px rgba(0, 0, 0, 0.1)',
				'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
				'premium-xl': '0 30px 80px rgba(0, 0, 0, 0.2)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
	],
}
