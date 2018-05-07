module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {
      skipDuplicates: true
    },
    'postcss-cssnext': {
      browsers: 'Chrome >= 45, ff >= 40, ie >= 10, Safari >= 8',
      features: {
        initial: {
          reset: 'all'
        },
        autoprefixer: true,
        customProperties: true
      }
    }
    // 'cssnano': {}
  }
});
