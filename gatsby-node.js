const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allContentfulProduct.edges.forEach(({ node }) => {
        createPage({
          path: `/products/${node.title}`,
          component: path.resolve("./src/template/product-template.js"),
          context: {
            id: node.id
          }
        });
      });
    })
    .catch(err => console.log(err));
};
