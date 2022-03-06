const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);
module.exports = withTM({
  images: {
    domains: ['images.ctfassets.net']
  },
  productionBrowserSourceMaps: true,
});
