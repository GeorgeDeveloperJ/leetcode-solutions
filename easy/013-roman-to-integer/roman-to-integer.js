function romanToInt(s) {
  const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  const inputDigits = s.split('');
  return inputDigits.reduce((acc, value, index, digits) => {
    const currentDecimalValue = romanNumbers[value];
    const nextDecimalValue = romanNumbers[digits[index + 1]];

    return currentDecimalValue < nextDecimalValue  ? acc - currentDecimalValue : acc + currentDecimalValue;
  }, 0);
}

// Tests
console.log(romanToInt("IV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));