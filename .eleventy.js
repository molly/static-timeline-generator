module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css')
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/img');
    return {
        dir: {
            input: 'src',
        }
    }
}
