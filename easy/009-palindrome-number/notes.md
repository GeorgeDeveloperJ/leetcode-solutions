# Palindrome Number

## Contexto
Given an integer x, return true if x is a , and false otherwise.

## Primera solucion O(n)
``` javascript
function isPalindrome(x) {
  const string = x.toString();
  let revertedString = "";
  for(let i = string.length - 1; i >= 0; i--) {
    revertedString += string[i];
  }
  return string === revertedString;
}
```
Esta solucion utiliza un for loop para crear otro string con el numero invertido

## Segunda solucion O(n)
``` javascript
function isPalindrome(x) {
  return x.toString() === x.toString().split('').reverse().join('');
}
```
Esta utiliza el split para convertirlo en un array para usar la funcion reverse y volverla a un str nuevamente

## Tercera solucion, utilizando matematicas
``` javascript
function isPalindrome(x) {
    if ( x < 0  || (x % 10 === 0 && x !== 0 )) return false;

    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = (revertedNumber * 10) + (x  % 10);
        x = Math.floor(x / 10);
    }
```
Esta utiliza las matematicas para saber si el numero es un palindromo sin transformarlo
en un string. 
