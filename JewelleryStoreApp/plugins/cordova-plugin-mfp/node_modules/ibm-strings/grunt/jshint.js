// Licensed Materials - Property of IBM
// 5725-I43 (C) Copyright IBM Corp. 2015. All Rights Reserved.
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with IBM Corp.

module.exports = function(grunt) {
  return {
    options: {
      'jshintrc': '.jshintrc',
      'reporter': require('jshint-stylish')
    },
    gruntfile: 'Gruntfile.js',
    js: {
      src: [
        'lib/*.js',
        'index.js'
      ]
    }
  };
};
