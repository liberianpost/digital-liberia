module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-combine-media-query': {},
    'postcss-combine-duplicated-selectors': {
      removeDuplicatedProperties: true
    }
  }
};
