/**
 * URL: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
 * 
 * 
 * Description:

A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

Courtesy of rosettacode.org

 */

function solution(list){
    let j = 1;
    let result= [];
    for(let i = 1; i <=list.length; i++){
        let temp = [];
        temp.push(list[i-1]);
        while(list[j-1]+1 === list[j]){
            temp.push(list[j]);
            j++;
        }
        
        if(temp.length>=3){
            
            let a = temp[0].toString() + '-'+temp[temp.length-1].toString(); 
            
            result.push(a);
            i=j;
        }else{
            
            result.push(list[i-1]);
        }
        j=i+1;
    }
    return result.join(',');
}
try {
    console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 24]))    
} catch (error) {
    console.log(error)
}
