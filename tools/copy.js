// @flow

// export copy configurations

module.exports = {
  copy: {
    main: {
      files: [
        {
          expand: true,
          cwd: 'src/assets',
          src: ['**'],
          dest: 'public/assets/',
          filter: 'isFile'
        }
      ]
    }
  }
};
