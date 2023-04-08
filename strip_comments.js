/**
 * URL:https://www.codewars.com/kata/51c8e37cee245da6b40000bd
 * 
 * Description:

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

 */

function solution(input, markers) {
    var flag = true;
    var text= input.split('');
    var regex =/\n/g;
    var result=[];
    for(let i = 1; i<=markers.length; i++){
        flag = true;
        while(flag){
          //we look for the character that is on the pos 0
            let newindex = text.indexOf(markers[i-1]);
          //if we don't find it we esc from the while
            if(newindex!=-1){
              //if we find it we push a slice of the text until the position of the newindex
                result.push(text.slice(0, newindex).join(''));
              //we cut the part that we push into the array
                text = text.slice(newindex);
              //now we look for if there's a \n in al the text
                let numeropos = text.join('').search(regex);
                //if there is a \n then we cut the curret text from the 0 pos to the \n position
                if(numeropos!=-1){
                    text = text.slice(numeropos);
                }else{
                    
                    //if there is not any \n we finish the string so we exit the while
                    flag =false;
                    // and also like we do not have another \n we can change the text to empty string
                    text = '';
                }
            }else {
                flag = false;  
            }
        }
    }
  //we substring the curren string of every push we did to cut the whitespace on the last position
    var re = result.map(e => e.substring(0,e.length-1));
    //just use join to convert to string like the output was required
    return re.join('')
};