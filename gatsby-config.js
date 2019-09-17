module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'SWAPI',
        // This is field under which it's accessible
        fieldName: 'swapi',
        // Url to query from
        url: process.env.REACT_APP_LATIN_DIACHRONIC_API_URL,
      },
    },
  ],
};
