/**
 * 
 * URL::https://www.codewars.com/kata/525f4206b73515bffb000b21
 *Description:

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes

    The input numbers are big.
    The input is a string of only digits
    The numbers are positives
 * 
 * 
 */

function add(a, b) {
    a=a.split('').reverse(); 
    b=b.split('').reverse();    
    let arr = [];
    if(a.length<b.length){
        let temp= a;
        a=b;
        b=temp;
    }
    let aux = 0;
    for(let i =0; i<a.length;i++){
        var result=0;
        if(isNaN(Number(b[i]))){
            result = Number(a[i])+aux;
        }else{
            result = Number(a[i])+Number(b[i])+aux;
            
        }
        aux=0;
        console.log(result);
        if(result.toString().length===2){
            aux=Number(result.toString()[0]);
            result=Number(result.toString()[1]);
        }
        arr.unshift(result);
    }
    if(aux!=0) arr.unshift(aux);
    return arr.join('');
    
}
try {
    console.log(add("888", "222"))
    console.log(add("1223", "229"))//, "1110"    
} catch (error) {
    console.log(error)
}
