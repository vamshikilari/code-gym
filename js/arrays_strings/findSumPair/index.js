function bisectArray({ sum, sortedArr }) {
  const index = sortedArr.findIndex((it) => it === sum);
  return sortedArr.slice(0, index + 1);
}

function findSumPair(arr, sum) {
  const sortedArr = arr.sort((a, b) => a - b);
  const sectionArray = bisectArray({ sum, sortedArr });
  const objMap = Object.fromEntries(sectionArray.map((it) => [it, true]));
  let pair = [];
  sectionArray.forEach((it, index, arr) => {
    let x = sum - it;
    objMap[x] && pair.length == 0 ? pair.push(it, x) : null;
  });
  console.log(pair);
  return pair;
}

function findSumPair2(arr, sum) {
  let s = new Set();
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    const element = arr[i];
    if (s.has(sum - element)) {
      return true;
    } else {
      s.add(element);
    }
  }
}

findSumPair([2, 0, 5, 12, 13, 16, 1, 3, 6], 3);
