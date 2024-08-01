function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let months = 0;
  let totalSavings = 0;

  if (startPriceOld >= startPriceNew) return [0, startPriceOld - startPriceNew];

  while (true) {
    months++;

    if (months % 2 == 0) {
      percentLossByMonth += 0.5;
    }
    startPriceOld *= 1 - percentLossByMonth / 100;
    startPriceNew *= 1 - percentLossByMonth / 100;
    totalSavings += savingPerMonth;
    if (startPriceOld + totalSavings >= startPriceNew) {
      return [months, Math.round(startPriceOld + totalSavings - startPriceNew)];
    }
  }
}
