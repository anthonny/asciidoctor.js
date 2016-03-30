var commonSpec = require('../share/common-specs.js');
var asciidoctor = require('../../build/npm/asciidoctor-core.js')()  ;
var testOptions = {
  platform: 'Node',
  baseDir: __dirname
};
commonSpec(testOptions, asciidoctor.Opal, asciidoctor.Asciidoctor(true));
