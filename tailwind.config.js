module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    container: (theme) => ({
      center: true,
      padding: {
        DEFAULT: theme('spacing.6'),
        sm: theme('spacing.8'),
        lg: theme('spacing.16'),
        xl: theme('spacing.20'),
        '2xl': theme('spacing.32')
      }
    }),
    extend: {
      fontFamily: {
        sans: ['Fira Sans']
      },
      colors: {
        primary: '#009A67'
      }
    }
  },
  plugins: []
}
