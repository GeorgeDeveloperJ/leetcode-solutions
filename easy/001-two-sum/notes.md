# Two Sum

## Contexto
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Primera solucion O(n^2)
``` javascript
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            const result = nums[i] + nums[j];
            if (result === target) {
                return [i, j];
            }
        }
    }
}
```
En esta solucion se recorre el bucle por cada elemento buscando la solucion para cada uno. Es O(n^2),
se puede mejorar utilizando, matematicas y memoria (hash tables)


## Segunda solucion O(n);
``` javascript
function twoSum(nums, target) {
  const numMap = {};
  for(let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const expected = target - number;
    if (numMap[expected] !== undefined) {
      return [numMap[expected], i];
    }
    numMap[number] = i;
  }
}
```

Esta es la mas optima ya que utiliza un objeto de JS para guardar los elementos que se esperan para cada uno
Si este elemento ya esta se returna practicamente inmediato, pasando una sola vez por el loop.
Este es mas optimo ya que el otro algoritmo siempre 'pregunta' que numero es mientra este lo guarda para checkearlo despues


