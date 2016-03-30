var commonSpec = require('../share/common-specs.js');
var asciidoctor = require('../../build/npm/asciidoctor-core.js')()  ;
commonSpec('NPM', asciidoctor.Opal, asciidoctor.Asciidoctor(true));
