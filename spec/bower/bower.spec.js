var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Define overrideMimeType, not define by default in wrapper
XMLHttpRequest.prototype.overrideMimeType = function() {};

commonSpec('Bower', Opal, Opal.Asciidoctor);
