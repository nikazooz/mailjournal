module.exports = {
  theme: {
    extend: {
      width: {
        '56': '14rem',
      },

      fill: theme => ({
        white: theme('colors.white'),
        'indigo-400': theme('colors.indigo.400'),
        'green-400': theme('colors.green.400'),
      }),

      shadows: {
        default: '0 2px 4px 0 rgba(0,0,0,0.10)',
        'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
        'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        'outline': '0 0 0 2px #6574cd',
      },
    },
  },
  variants: {},
  plugins: [],
}
