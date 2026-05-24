module.exports = function(eleventyConfig) {
  // Copy CSS, fonts, and images straight through to www/
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/files");

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
