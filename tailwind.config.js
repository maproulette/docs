const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './content/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'black-15': 'rgba(0, 0, 0, .15)',
        green: {
          default: '#47725F',
        },
        blue: {
          default: '#172E51',
        },
        turquoise: '#91f3a2',
      },
      boxShadow: {
        inner: 'inset 0 1px 3px 0 rgba(0,0,0,0.3)',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.white'),
          a: {
            color: theme('colors.turquoise'),
            '&:hover': {
              color: theme('colors.white'),
            },
            'text-decoration': 'underline',
          },
          strong: {
            color: theme('colors.white'),
          },
          h1: {
            color: theme('colors.white'),
          },
          h2: {
            color: theme('colors.white'),
          },
          h3: {
            color: theme('colors.white'),
          },
          h4: {
            color: theme('colors.white'),
          },
        },
      },
    }),
    linearGradientColors: (theme) => ({
      'green-blue': [
        theme('colors.green.default'),
        theme('colors.blue.default'),
      ],
    }),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
    require('tailwindcss-gradients'),
  ],
}
