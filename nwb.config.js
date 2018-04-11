const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: 'SleepDealer',
  },
  webpack: {
    styles: {
      css: [
        {
          include: path.resolve('src'),
          css: {
            modules: true,
          },
        },
      ],
    },
  },
};
