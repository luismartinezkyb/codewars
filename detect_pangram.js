/**
 * 
 * url:https://www.codewars.com/kata/545cedaa9943f7fe7b000048
 * Description:

    A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

 */

function isPangram(string){
    let newstring = string.toLowerCase().match(/([A-Z])/gi);
    return newstring.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .length == 26 ? true : false


}