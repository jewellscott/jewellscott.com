Projects refactor 
_

# What I'm trying to  do

- Have a _data/projects subfolder with individual projectID.json files for each project
- Iterate over key/value pairs in each projectID.json within a few different templates
  - featured posts on homepage
    - general iteration over every project, filtered by featured post (handled)
  - project list on site.com/projects
    - general iteration over every project
  - *** THE TROUBLE: blog post with case study template
    - need to pull in specific key/value pairs from a specific projectID, which is called out in the markdown file as projectID, which fills in only the data for that projectID, for the right project 
- Have a case-studies subfolder under blog so case-studies.json can assign layouts/case-study to all, but reassign permalinks to be just blog/case-study-name-or-whatever as usual (handled)
    ```
    {
      "layout": "layouts/case-study.html",
      "permalink": "/blog/{{ title | slug }}/index.html"
    }
    ```

# Known solutions
  - EASY: Don't
    - Let case studies live separately under /project/jewellscott-com like before
    - Autogenerating pages using markdown files and frontmatter (like Blog)
   
# Suspected solutions
  - Wipe old project infrastructure and make a new collection using global data and figure out what happens
  
*/