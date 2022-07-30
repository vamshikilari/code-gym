/**
 * example:
 * bitmap:
 * [
 *  [1,0,1,1,1,1,1,1],
 *  [1,1,1,1,1,1,1,1],
 *  [1,0,0,0,0,0,0,1],
 *  [1,0,0,0,0,0,0,1],
 *  [1,1,1,1,1,1,1,1],
 *  [1,0,1,1,1,1,1,1],
 * ]
 *
 * color = 2,
 * x = 2, 2 (co-ordinates)
 *
 * output:
 * [
 *  [1,0,1,1,1,1,1,1],
 *  [1,1,1,1,1,1,1,1],
 *  [1,2,2,2,2,2,2,1],
 *  [1,2,2,2,2,2,2,1],
 *  [1,1,1,1,1,1,1,1],
 *  [1,0,1,1,1,1,1,1],
 * ]
 */

let visitedMap = {};

function bucket({ bitmap, x, y, color }) {
  const maxRows = bitmap.length;
  const maxCols = bitmap[0].length;
  if (visitedMap[`${x}${y}`] || x > maxRows || x < 0 || y > maxCols || y < 0) {
    return;
  }
  const pt = bitmap[x][y];

  if (pt === 1) {
    return;
  }

  bitmap[x][y] = color;
  const key = `${x}${y}`;
  visitedMap[key] = true;

  let i1, i2, i3, i4;
  i1 = { pt: { x: x - 1, y } };
  i2 = { pt: { x: x, y: y + 1 } };
  i3 = { pt: { x: x + 1, y } };
  i4 = { pt: { x: x, y: y - 1 } };

  [i1, i2, i3, i4].forEach((it) => {
    bucket({ bitmap, x: it.pt.x, y: it.pt.y, color });
  });
}

const bitmap = [
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
];

console.log(bitmap);

bucket({ bitmap, x: 2, y: 1, color: 2 });

console.log(bitmap);
