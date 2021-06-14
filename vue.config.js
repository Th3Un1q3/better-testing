module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        }
      ]
    },
  }
};
