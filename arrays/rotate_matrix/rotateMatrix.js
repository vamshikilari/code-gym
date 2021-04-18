/**
 *
 * @param {Array} matrix
 * validates input to be square matrix
 */
function validateInput(matrix) {
  const isRootNotSquare = matrix.length % 2 !== 0;
  const isNotASquare = matrix.some((unitArray) => unitArray.length % 2 !== 0);

  return isRootNotSquare || isNotASquare;
}

/**
 * @param {Array} matrix
 * rotates a square matrix by a factor of 90°
 * @example: [[1,2], [3,4]] ==> [[1,3], [2, 4]]
 * */
function rotateSquareMatrix(matrix) {
  console.log("matrix before rotation", matrix);
  const size = matrix.length;

  if (validateInput(matrix)) throw Error("Not a square matrix");

  for (let r = 0; r <= size - 1; r++) {
    let Rr, Rc;
    for (let it1 = r, it2 = r; it2 <= size - 1; it2++) {
      Rr = matrix[it1][it2];
      Rc = matrix[it2][it1];
      matrix[it1][it2] = Rc;
      matrix[it2][it1] = Rr;
    }
  }

  console.log("matrix after rotation", matrix);
}

/**
 *
 * @param {Object}
 * @returns {Array}
 */
function generateRandomSquareMatrix({
  size = 4,
  lowBound = 1,
  upperBound = 100,
}) {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    const temp = [];
    for (let j = 0; j < size; j++) {
      temp[j] =
        Math.floor(Math.random() * (upperBound - lowBound + 1)) + lowBound;
    }
    matrix.push(temp);
  }
  return matrix;
}

rotateSquareMatrix(generateRandomSquareMatrix({ size: 4 }));
