const obj = { a: { b: null, d: 4 }, c: 2 };

flatten;
obj.a.b = 1; // before flat
obj.a.b = 1; // after flat

// check for the typeof at each access level
// if the type is int, do nothing,
// else store the accessKey, and call the function again until we get to the end.

function isNull(value) {
  return [null, undefined].includes(value);
}

// Object Constructor

function flatten(obj = {}, keyOld = "") {
  const testObj = { ...obj };
  const keyedValues = Object.entries(testObj);
  const flattenedObj = keyedValues.reduce((acc, [keyNew, value]) => {
    const superKey = keyOld === "" ? keyNew : keyOld + "." + keyNew;
    if (!isNull(value) && typeof value === "object") {
      acc = { ...acc, ...flatten(value, superKey) };
    } else {
      acc = { ...acc, [superKey]: value };
    }
    return acc;
  }, {});
  return flattenedObj;
}

const testObj = { a: { b: { c: { d: { e: 2 } } } } };

console.log(flatten(testObj));
