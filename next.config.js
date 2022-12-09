const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'randomuser.me'}
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}