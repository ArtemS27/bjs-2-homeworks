function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let difference;
  if (arr === undefined || arr.length == 0) {
    difference = 0;
  } else {
    difference = max - min;
}
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;
  if (arr === undefined || arr.length == 0) {
    difference = 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    difference = sumEvenElement - sumOddElement;
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average;
  if (arr === undefined || arr.length == 0) {
    average = 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    average = sumEvenElement / countEvenElement;
  }
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func.apply(null, arrOfArr[i]);
    if (result > maxWorkResult) {
      maxWorkResult = result;
    }
  }
  return maxWorkResult;
}
