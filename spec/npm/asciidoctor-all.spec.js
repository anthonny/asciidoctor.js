var commonSpec = require('../share/common-specs.js');
var asciidoctor = require('../../build/npm/asciidoctor-core.js')()  ;
var options = {
  platform: 'Node',
  baseDir: __direname
}
commonSpec(options, asciidoctor.Opal, asciidoctor.Asciidoctor(true));
