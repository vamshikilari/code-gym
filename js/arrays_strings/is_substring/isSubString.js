/** checks if a string is a sub-string of another string
 * @param {string} string
 * @param {string} testString
 */
function isSubString(string, testString) {
  const tokenizedString = string.split("");
  const tokenizedTestString = testString.split("");

  const stringHashMap = {};
  const testStringHashMap = {};

  tokenizedString.forEach((char) =>
    stringHashMap.hasOwnProperty(char)
      ? (stringHashMap.char = +stringHashMap[char])
      : (stringHashMap.char = 1)
  );

  tokenizedTestString.forEach((char) =>
    testStringHashMap.hasOwnProperty(char)
      ? (testStringHashMap.char = +testStringHashMap[char])
      : (testStringHashMap.char = 1)
  );

  const haveEqualCharInstances = Object.entries(testStringHashMap).every(
    ([char, count]) => stringHashMap?.[char] === count
  );

  // check for equality in length and character instances
  if (
    tokenizedString.length !== tokenizedTestString.length ||
    !haveEqualCharInstances
  ) {
    console.info("strings are not equal");
    return false;
  }

  // not rotated at all
  const isNotRotated = tokenizedString.every(
    (char, index) => tokenizedTestString[index] === char
  );

  if (isNotRotated) {
    console.info("strings are equal yet not rotated");
    return false;
  }

  const stringLength = tokenizedString.length;

  //completely rotated
  let completelyRotatedFlag = true;

  for (let i = 0; i < stringLength && completelyRotatedFlag; i++) {
    const element = tokenizedString[i];
    const element2 = tokenizedTestString[stringLength - 1 - i];

    if (element !== element2) {
      completelyRotatedFlag = false;
    }
  }

  if (completelyRotatedFlag) {
    console.log("is a substring, rotated completely");
    return true;
  } else if (!completelyRotatedFlag) {
    console.log("is not rotated completely");
  }

  let foundMatch, foundAtIndex, isMatchFromLTR, isMatchFromRTL;
  // partially rotated by some characters
  for (let j = 0; j < stringLength && foundMatch == null; j++) {
    const elementBeforeRotation = tokenizedString[0];
    const elementAfterRotation = tokenizedTestString[j];
    const elementAfterRotationFromLast =
      tokenizedTestString[stringLength - j - 1];
    isMatchFromLTR =
      elementBeforeRotation === elementAfterRotation &&
      tokenizedTestString[j - 1] === tokenizedString[stringLength - 1];
    isMatchFromRTL =
      elementBeforeRotation === elementAfterRotationFromLast &&
      tokenizedTestString[stringLength - j - 2] ===
        tokenizedString[stringLength - 1];
    if (isMatchFromLTR) {
      foundMatch = true;
      foundAtIndex = j;
    } else if (isMatchFromRTL) {
      foundMatch = true;
      foundAtIndex = stringLength - j - 1;
    }
  }

  if (foundMatch == null) {
    console.log("is not a substring line 92");
    return false;
  }
  let partiallyRotatedFlag = true;
  if (isMatchFromLTR || isMatchFromRTL) {
    // iterate from ltr
    const currentIt = foundAtIndex;
    let originalIt = 0;
    let backIt = stringLength - 1;
    for (let i = foundAtIndex; i < stringLength && partiallyRotatedFlag; i++) {
      if (tokenizedString[originalIt] !== tokenizedTestString[i]) {
        partiallyRotatedFlag = false;
      }
      originalIt++;
    }
    for (let m = foundAtIndex - 1; m >= 0 && partiallyRotatedFlag; m--) {
      if (tokenizedString[backIt] !== tokenizedTestString[m]) {
        partiallyRotatedFlag = false;
      }
      backIt--;
    }
  }
  if (partiallyRotatedFlag) {
    console.log("is a substring, rotated partially");
    return true;
  } else {
    console.log("is not a substring, nor rotated partially");
    return false;
  }
}

isSubString("waterbottle", "ttlewaterbo");
