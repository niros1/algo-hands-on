import { findBestProfitPrices } from "./maxProfit";

if (true) {
  test("Best Prfit - basic", () => {
    expect(findBestProfitPrices([1, 2, 3, 4, 3, 2, 1, 2, 5])).toEqual([1, 5]);
  });

  test("Best Prfit - loose", () => {
    expect(findBestProfitPrices([8, 6, 5, 4, 3, 2, 1])).toEqual([8, 6]);
  });

  test("Best Prfit - odds", () => {
    expect(findBestProfitPrices([1, 1, 1, 1])).toEqual([8, 6]);
  });

  test("Best Prfit - Empty Array", () => {
    expect(findBestProfitPrices([])).toEqual([8, 6]);
  });
}
