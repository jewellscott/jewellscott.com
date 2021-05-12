const rssPlugin = require('@11ty/eleventy-plugin-rss');
const fs = require("fs");
const moment = require("moment");

module.exports = config => {

  // Filters
  config.addFilter('toUTCString', (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("LL");  
  })

  config.addFilter('noUTC', (date) => {
    return moment(date).format("LL");  
  })


  // Plugins
config.addPlugin(rssPlugin);

  // add Browsersync 404 routing

  config.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });


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
  
// Set directories to pass through to the dist folder
config.addPassthroughCopy('./src/images/');
config.addPassthroughCopy('./src/css/');

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