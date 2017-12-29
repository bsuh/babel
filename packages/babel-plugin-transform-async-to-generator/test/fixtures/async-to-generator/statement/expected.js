function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  var _foo = babelHelpers.asyncToGenerator(function* () {
    var wat = yield bar();
  });

  return _foo.apply(this, arguments);
}
