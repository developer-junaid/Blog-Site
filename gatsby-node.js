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
            category
            title
            slug
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

  // // Create BlogDetails Page
  blogPosts.map((blogPost) => {
    createPage({
      path: `/blogs/${blogPost.node.slug}`,
      component: path.resolve("./src/templates/BlogTemplate.tsx"),
      context: {
        postDetails: blogPost,
        allPosts: blogPosts,
      },
    });
  });

  // // Create CategoryDetails Page
  categories.map((category) => {
    createPage({
      path: `/categories/${category.node.name}`,
      component: path.resolve("./src/templates/CategoryTemplate.tsx"),
      context: {
        categoryDetails: category,
        postDetails: blogPosts,
      },
    });
  });

  // View Data
};
