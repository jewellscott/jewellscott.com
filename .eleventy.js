const rssPlugin = require('@11ty/eleventy-plugin-rss');


// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = config => {

// Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
config.addPlugin(rssPlugin);


  config.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });

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