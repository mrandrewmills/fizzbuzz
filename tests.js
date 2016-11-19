QUnit.test("default values initialization", function (assert) {
    "use strict";

    assert.equal(fizzbuzz.start, 1, "We expect start to be 1.");
    assert.equal(fizzbuzz.finish, 100, "We expect finish to be 100.");
    assert.equal(fizzbuzz.modFizz, 3, "We expect modFizz to be 3.");
    assert.equal(fizzbuzz.modBuzz, 5, "We expect modBuzz to be 5.");
    assert.equal(fizzbuzz.txtFizz, "fizz", "We expect txtFizz to be 'fizz.'");
    assert.equal(fizzbuzz.txtBuzz, "buzz", "We expect txtBuzz to be 'buzz.'");
});

results = fizzbuzz.play();

QUnit.test("check quantity of results", function (assert) {
    "use strict";

    var counter = 0;
    for (let answer of results) {
      counter++;
  }

  assert.equal(counter, 101, "We expect play method to return 101 elements [JavaScript uses 0-based arrays].");
});

QUnit.test( "check individual results", function(assert){
    "use strict";

    for (x = fizzbuzz.start; x <= fizzbuzz.finish; x++) {
      assert.ok(
        (results[x] == x) ||
        (results[x] == 'fizz') ||
        (results[x] == 'buzz') ||
        (results[x] == 'fizzbuzz') , "We expect results[x] is equal to x, 'fizz', 'buzz', or 'fizzbuzz.'");
    }
});

QUnit.test( "verify default values were not altered", function(assert) {
  assert.equal(fizzbuzz.start, 1, "We expect start to be 1.");
  assert.equal(fizzbuzz.finish, 100, "We expect start to be 100.");
  assert.equal(fizzbuzz.modFizz, 3, "We expect modFizz to be 3.");
  assert.equal(fizzbuzz.modBuzz, 5, "We expect modBuzz to be 5.");
  assert.equal(fizzbuzz.txtFizz, "fizz", "We expect txtFizz to be 'fizz.'");
  assert.equal(fizzbuzz.txtBuzz, "buzz", "We expect txtBuzz to be 'buzz.'");
});
