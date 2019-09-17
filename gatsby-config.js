module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'LATIN',
        // This is field under which it's accessible
        fieldName: 'latin',
        // Url to query from
        url: 'http://localhost:8080/graphql',
      },
    },
  ],
};
