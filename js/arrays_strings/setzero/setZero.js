/**
 * @type {{[key:string]: Boolean}}
 * rows that are already set to zero
 */
const Nr = {};

/**
 * @type {{[key:string]: Boolean}}
 * columns that are already set to zero
 */
const Nc = {};

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

/**
 * @param {Object} location
 * @param {number} location.row
 * @param {number} location.column
 * @param {Array<number>} location.matrix
 * @returns {void}
 */
function setRowAndColumnToZero({ row, column, matrix }) {
  const rowSize = matrix.length;
  // any column
  const columnSize = matrix[0].length;
  Nr[row] = true;
  Nc[column] = true;

  for (let c = 0; c < columnSize; c++) {
    matrix[row][c] = 0;
  }
  for (let r = 0; r < rowSize; r++) {
    matrix[r][column] = 0;
  }
}

/**
 * @param {Array<number>} matrix
 * @returns {Array<number>}
 * sets row, column elements to zero when it finds a zero
 */
function main(matrix) {
  const columns = matrix[0].length;
  const rows = matrix.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        if (Nr[i] == null && Nc[j] == null) {
          setRowAndColumnToZero({ row: i, column: j, matrix: matrix });
        }
      }
    }
  }

  console.log(matrix);
}

main([
  [1, 0, 3],
  [4, 2, 7],
  [0, 4, 7],
  [4, 5, 7],
  [4, 5, 4],
]);
