import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          black: '#09090A',
          white: '#FFFFFF',
          gray: {
            400: '#C4C4CC',
            800: '#202024',
          },
          purple: '#996DFF',
          lightblue: '#C7AFFF',
        },
      },
      lineHeight: {
        chubby: '160%',
      },
      gridTemplateColumns: {
        'bg-image': 'minmax(416px, 1fr) minmax(208px, 300px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'linear-gradient': 'linear-gradient(90deg, #996DFF 0%, #C7AFFF 100%)',
      },
    },
  },
  plugins: [],
}
export default config
