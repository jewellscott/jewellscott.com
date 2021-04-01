const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
  return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
  });

  // Returns project items, sorted by display order
  config.addCollection('projects', collection => {
  return sortByDisplayOrder(collection.getFilteredByGlob('./src/projects/*.md'));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection('featuredProjects', collection => {
  return sortByDisplayOrder(collection.getFilteredByGlob('./src/projects/*.md')).filter(
    x => x.data.featured
  );
});

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};