function letterCombinations(digits) {
  //Complete the function
	  if (digits === '') {
    return [];
  }

  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  let result = [''];

  for (let i = 0; i < digits.length; i++) {
    const letters = mapping[digits[i]];
    const newResult = [];
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        newResult.push(result[j] + letters[k]);
      }
    }
    result = newResult;
  }

  return result.sort();
}

module.exports = letterCombinations;