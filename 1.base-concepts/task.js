"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  }
  else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let creditSum = amount - contribution;
  let convertedMonthPercent = (percent / 100) / 12;
  let payment = creditSum * (convertedMonthPercent + (convertedMonthPercent / (Math.pow((1 + convertedMonthPercent), countMonths) - 1)));
  let fullSum = +(payment * countMonths).toFixed(2);
  return fullSum;
}