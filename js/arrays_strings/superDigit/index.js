function superDigit(num) {
  let rem = num;
  let sum = 0;
  while (rem !== 0) {
    sum += rem % 10;
    rem /= 10;
  }
  if (sum >= 10) {
    rem = sum;
    return superDigit(rem);
  } else {
    return Math.round(sum);
  }
}

console.log(superDigit(1996));
