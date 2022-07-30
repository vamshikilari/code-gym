function moveZeros(arr) {
  const n = arr.length;
  let c = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[c]] = [arr[c], arr[i]];
      c++;
    }
  }
  return arr;
}

console.log(moveZeros([1, 0, 0, 2, 3, 4]));
