const sumOfEvenNumbersFibonacci = (
  firstValue = 3,
  secondValue = 4,
  treshold = 7000000
) => {
  let a;
  let b;

  if (!(Number.isInteger(firstValue) && Number.isInteger(secondValue))) {
    throw new Error("Введите положительное целое число");
  }

  if (firstValue < secondValue) {
    a = firstValue;
    b = secondValue;
  } else {
    a = secondValue;
    b = firstValue;
  }

  let result = 0;
  do {
    result += a % 2 === 0 ? a : 0;
    [a, b] = [b, a + b];
  } while (b <= treshold);

  return result;
};

console.log(sumOfEvenNumbersFibonacci());
