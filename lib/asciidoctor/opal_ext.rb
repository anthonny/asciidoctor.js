%x(
  var isNode = typeof module !== 'undefined' && module.exports,
      isBrowser = typeof XMLHttpRequest !== 'undefined',
      isNashorn = typeof Java !== 'undefined' && Java.type,
      isRhino = typeof java !== 'undefined',
      value;

  // With browserify we can use module and XMLHttpRequest, so for node
  // we must test that we have not XMLHttpRequest
  if (isNode && !isBrowser) {
    value = 'node';
  }
  else if (isBrowser) {
  // or we can check for document
  //else if (typeof document !== 'undefined' && document.nodeType) {
    value = 'browser';
  }
  else if (isNashorn) {
    value = 'java-nashorn';
  }
  else if (isRhino) {
    value = 'java-rhino';
  }
  else {
    // standalone is likely SpiderMonkey
    value = 'standalone';
  }
  console.log('====== JAVASCRIPT_PLATFORM ========== ', value);
)
JAVASCRIPT_PLATFORM = %x(value)
require 'strscan'
require 'asciidoctor/opal_ext/file'
require 'asciidoctor/opal_ext/match_data'
require 'asciidoctor/opal_ext/kernel'

case JAVASCRIPT_PLATFORM
  when 'java-nashorn'
    require 'asciidoctor/opal_ext/nashorn/io'
  else
end
