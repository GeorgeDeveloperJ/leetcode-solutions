function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  let result = strs[0];

  for(let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(result)) {
      result = result.slice(0, -1);
      if (result === "") return "";
    }
  }
  console.log("Resultado:", result);
  return result;
}

// Tests
console.log(longestCommonPrefix(["flower", "flow", "flight"]));