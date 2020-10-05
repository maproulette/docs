const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'black-15': 'rgba(0, 0, 0, 0.15)',
        'black-90': 'rgba(0, 0, 0, 0.9)',
        green: {
          default: '#47725F',
        },
        blue: {
          default: '#172E51',
          dark: '#182841',
          ...defaultTheme.colors.blue,
        },
        yellow: {
          default: '#fffd86',
          ...defaultTheme.colors.yellow,
        },
        turquoise: '#91f3a2',
      },
      boxShadow: {
        inner: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
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
          blockquote: {
            color: theme('colors.white'),
          },
          thead: {
            color: theme('colors.white'),
          },
          pre: {
            backgroundColor: theme('colors.black-90'),
          },
          code: {
            color: theme('colors.white'),
            backgroundColor: theme('colors.white-10'),
            borderRadius: '3px',
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
