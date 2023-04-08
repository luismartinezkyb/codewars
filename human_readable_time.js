/**
 * URL: https://www.codewars.com/kata/52685f7382004e774f0001f7
 * Description:

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

 */

//SOLUTION:
function humanReadable (seconds) {
    if(!seconds || seconds <=0) return '00:00:00'; 
        
    let segundos = seconds%60;
    let minutos = parseInt(seconds/60)%60;
    let horas= parseInt(seconds / 3600);
    
    let hrs = horas.toString().split('');
    let min = minutos.toString().split('');
    let secs = segundos.toString().split('');
    hrs.length ==1? hrs.unshift('0'): '';
    min.length ==1? min.unshift('0'): '';
    secs.length ==1? secs.unshift('0'): '';
    let result = `${hrs.join('')}:${min.join('')}:${secs.join('')}`;
    return result;
}