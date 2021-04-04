var path = require("path");

// Create Pages
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions; // Get createPage function from actions

  // Get Data
  const data = await graphql(`
    query GetData {
      allContentfulBlog {
        edges {
          node {
            id
            catId
            title
            createdAt(fromNow: true)
            author
            likes
            content {
              raw
            }
            blogImage {
              fluid {
                src
              }
            }
          }
        }
      }

      allContentfulCategory {
        edges {
          node {
            blogIds {
              ids
            }
            id
            name
          }
        }
      }
    }
  `);

  // // Store data
  const blogPosts = data.data.allContentfulBlog.edges;
  const categories = data.data.allContentfulCategory.edges;

  // // Create Page
  blogPosts.map((blogPost) => {
    createPage({
      path: `/blogs/${blogPost.node.id}`,
      component: path.resolve("./src/templates/blogPost.jsx"),
      context: {
        postDetails: blogPost,
      },
    });
  });

  // View Data
};
