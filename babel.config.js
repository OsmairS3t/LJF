module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root:['./src'],
          alias: {
            '@assets':'./src/Assets',
            '@components': './src/Components',
            '@routes': './src/Routes',
            '@screens': './src/Screens',
            '@storage': './src/Storage',
            '@utils': './src/Utils',
          }
        }
      ],
    ]
  };
};
