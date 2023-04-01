// ⚠️ NE PAS TOUCHER

const sumArr = require("./sumArr");

test('Should return ["3", "6", "4"]', () => {
  expect(sumArr(["1", "2", "3"], ["2", "4", "1"])[0]).toBe("3");
  expect(sumArr(["1", "2", "3"], ["2", "4", "1"])[1]).toBe("6");
  expect(sumArr(["1", "2", "3"], ["2", "4", "1"])[2]).toBe("4");
});

test('should return ["4", "11", "12", "8", "2"]', () => {
  expect(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])[0]).toBe("4");
  expect(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])[1]).toBe("11");
  expect(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])[2]).toBe("12");
  expect(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])[3]).toBe("8");
  expect(sumArr(["2", "7", "3", "8", "2"], ["2", "4", "9"])[4]).toBe("2");
});
