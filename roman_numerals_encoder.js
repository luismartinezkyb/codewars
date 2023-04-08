/**
 * URL: https://www.codewars.com/kata/51b62bf6a9c58071c600001b
 * Description:

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

 * 
 */


function solution(num){
    let numbers =[
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM", "IV", "D", "DC", "DCC", "DCCC", "CM"]
    ];
    let result = [] 
    let newNum = num.toString().split('')
    let size = num.toString().split('').length;
    for (let i = 0; i <size ; i++){
        let num2= newNum.pop();
        console.log(num2,i)
        result.unshift(numbers[i][Number(num2)]);
    }
    return result.join('')
    
    
    
}