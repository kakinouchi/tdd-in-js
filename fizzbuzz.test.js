const convert = require("./fizzbuzz");

describe("convertメソッドは数を文字列に変換する", () => {
  describe("3の倍数のときは数の代わりに文字列'Fizz'を返す", () => {
    test("3を渡すと文字列'Fizz'を返す", () => {
      expect(convert(3)).toBe("Fizz");
    });
  });

  describe("5の倍数のときは数の代わりに文字列'Buzz'を返す", () => {
    test("5を渡すと文字列'Buzz'を返す", () => {
      expect(convert(5)).toBe("Buzz");
    });
  });

  describe("3と5両方の倍数のときは数の代わりに文字列'FizzBuzz'を返す", () => {
    test("15を渡すと文字列'FizzBuzz'を返す", () => {
      expect(convert(15)).toBe("FizzBuzz");
    });
  });

  describe("その他の数のときには、そのまま文字列に変換する", () => {
    test("1を渡すと文字列'1'を返す", () => {
      expect(convert(1)).toBe("1");
    });
  });
});
