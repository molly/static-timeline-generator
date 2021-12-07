const pluginSass = require('eleventy-plugin-sass');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    autoprefixer: true,
    cleanCss: true,
    watch: './src/css/*.sass',
    outputDir: './_site/css',
  });
  eleventyConfig.addPassthroughCopy('src/css/*.css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: 'src',
    },
  };
};
