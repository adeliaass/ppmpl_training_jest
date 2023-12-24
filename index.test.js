// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should not change an already capitalized word", () => {
    expect(capitalize("World")).toBe("World");
  });

  test("should handle a string with leading whitespaces", () => {
    expect(capitalize("  test")).toBe("  test");
  });

  test("should handle an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  test("should handle a positive epoch date", () => {
    expect(epochDateToUTC(1000000000)).toBe("Sun, 09 Sep 2001 01:46:40 GMT");
  });

  test("should handle a negative epoch date", () => {
    expect(epochDateToUTC(-1000000000)).toBe("Sun, 24 Apr 1938 22:13:20 GMT");
  });

  test("should handle a large epoch date", () => {
    expect(epochDateToUTC(16301664000)).toBe("Tue, 30 Jul 2486 16:00:00 GMT");
  });
});

