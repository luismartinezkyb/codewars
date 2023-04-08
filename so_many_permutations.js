/**
 * URL::https://www.codewars.com/kata/5254ca2719453dcc0b00027d
 * 
 * Description:

In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

Note: The order of the permutations doesn't matter.

Good luck!

 * 
 */

function permutations(string, result = []) {
    let input = string.split('');
    if (input.length === 0) {
        result.push([]);
    } else {
        for (let i = 0; i < input.length; i++) {
        const actual = input[i];
        const remaining = input.slice(0, i).concat(input.slice(i + 1));
        
        const withoutcurrent = permutations(remaining.join(''));
        
        for (let j = 0; j < withoutcurrent.length; j++) {
            const permutation = actual.concat(withoutcurrent[j]);
            if(!result.includes(permutation)) {
            
            result.push(permutation);
            }
            
        }
        }
    }
    return result;
}