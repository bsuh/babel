function foo(_x) {
  return _foo.apply(this, arguments);
}

function _foo() {
  var _foo = babelHelpers.asyncToGenerator(function* (bar) {});

  return _foo.apply(this, arguments);
}
