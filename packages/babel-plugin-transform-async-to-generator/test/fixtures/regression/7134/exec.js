async function asyncFn() {
  async function nestedAsyncFn() {
    return true;
  }
  return nestedAsyncFn();
}

async function main() {
  try {
    assert.equal(await asyncFn(), true);
  } catch (e) {
    assert.fail("Calling nested async function threw an exception");
  }
}

return main();
