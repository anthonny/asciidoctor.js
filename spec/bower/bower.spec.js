var path = require('path');
var testOptions = {
  platform: 'Bower',
  baseDir: path.join(__dirname, '..')
};

commonSpec(testOptions, Opal, Opal.Asciidoctor);
