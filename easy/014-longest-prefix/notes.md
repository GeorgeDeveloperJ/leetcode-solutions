# Longest Common Prefix

## Context
``` text
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
```

## My Solution
``` javascript
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
```
Using a while inside of a for I achive a time complexity O(S) (or O(n * m)) and a memory
complexity O(1)

## Fastest solution
``` javascript
strs.sort()
    let first = strs[0]
    let last = strs[strs.length - 1]
    let lcp = ''
    for(let i = 0; i < last.length; i++){
        if(first[i] !== last[i]) break
        lcp += first[i]
    }
    return lcp
```
Sorting the array first, reduces a lot the diff of the exercise


