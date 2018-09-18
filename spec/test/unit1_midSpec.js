let functions = require("../../lib/test/unit1_mid");
let doubler = functions.doubler;
let factors = functions.factors;
let median = functions.median;
let product = functions.product;
let largest = functions.largest;
let and = functions.and;
let includes = functions.includes;
let disemvowel = functions.disemvowel;

describe("#doubler", () => {
  beforeEach(() => {
    array = [1, 2, 3];
  });

  it("doubles the elements of the array", () => {
    expect(doubler(array)).toEqual([2, 4, 6]);
  });

  it("does not modify the original array", () => {
    const dupArray = array.slice(0);

    doubler(array);

    expect(array).toEqual(dupArray);
  });
});

describe("#factors", () => {
  it("returns the factors of 10 in order", () => {
    expect(factors(10)).toEqual([1, 2, 5, 10]);
  });

  it("returns just two factors for primes", () => {
    expect(factors(13)).toEqual([1, 13]);
  });
});

describe("#median", () => {
  it("returns the middle of an array", () => {
    expect(median([3, 2, 1, 4, 5])).toEqual(3);
  });

  it("returns the avearge of the middle two elements if the length is even", () => {
    expect(median([3, 6, 2, 1, 4, 5])).toEqual(3.5);
  });
});
describe("#product", () => {
  it("returns the product of an array", () => {
    expect(product([1, 2, 3, 4, 5])).toEqual(120);
  });

  it("if the array is empty is should return 0", () => {
    expect(product([])).toEqual(0);
  });
});
describe("#largest", () => {
  it("returns the largest number", () => {
    expect(largest([1, 2, 3, 4, 5])).toEqual(5);
  });

  it("works with negative numbers", () => {
    expect(largest([-5, -1, -4, -3])).toEqual(-1);
  });
});
describe("#and", () => {
  it("return true with two true arguments", () => {
    expect(and(true, true)).toEqual(true);
  });

  it("will return false if an argument has a falsy value", () => {
    expect(and("hello", "")).toEqual(false);
  });
});
describe("#includes", () => {
  it("will return true when the target is included", () => {
    expect(includes([1, 2, 3, 4, 5], 4)).toEqual(true);
  });

  it("will return false if target is not included", () => {
    expect(includes(["cat", "dog", "snake"], "panther")).toEqual(false);
  });
});
describe("#disemvowel", () => {
  it("will return a string without the vowels", () => {
    expect(disemvowel("hello world")).toEqual("hll wrld");
  });
});
