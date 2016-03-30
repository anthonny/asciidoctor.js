var path = require('path');
var testOptions = {
  platform: 'Bower',
  baseDir: path.dirname(__dirname)
};

commonSpec(testOptions, Opal, Opal.Asciidoctor);
