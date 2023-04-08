
/**
 * URL:https://www.codewars.com/kata/52c4dd683bfd3b434c000292
 * 
 * Description:

    "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

    Any digit followed by all zeros: 100, 90000
    Every digit is the same number: 1111
    The digits are sequential, incementing†: 1234
    The digits are sequential, decrementing‡: 4321
    The digits are a palindrome: 1221 or 73837
    The digits match one of the values in the awesomePhrases array

    † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
    ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2

Error Checking

    A number is only interesting if it is greater than 99!
    Input will always be an integer greater than 0, and less than 1,000,000,000.
    The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
    You should only ever output 0, 1, or 2.


 */
function isInteresting(number, awesomePhrases) {
    let counter = 0;
    
    var j =0
    while(counter !=2 && j<3){
        
        if(awesomePhrases.length!==0){
            let index = awesomePhrases.indexOf(number);
            index !=-1? counter=2: '';
        } 
        
        let regex1 = /^[1-9]0{2,}$/g; // to match if the number have 2 or more zeros after one digit
        let regex2 = /^(\d)\1*$/g; //para test if the number is 1111 or 2222 etc
        if(regex1.test(number) || regex2.test(number)) 
            counter=2
        
        
        //if there are incremental
        let arr = number.toString().split('');
        let flag = true
        //[1,2,3,4,5, 8,9,0]
        for (let i = 1; i <arr.length; i++) {
            
            if(arr[i]-arr[i-1] !==1) {
                if(arr[i-1]==9&&arr[i]==0){
                    
                }else{
                    flag = false
                }
            }
        }
        flag? counter=2: '';
        

        flag = true
        //if there are incremental for the reverse array
        arr = arr.reverse()
        for (let i = 1; i <arr.length; i++) {
            if(arr[i]-arr[i-1] !==1) flag = false;
        }
        
        flag? counter=2: '';
        
        //PALINDROME
        flag = true
        let size = arr.length
        for(let i= 0; i<size; i++){
            if(arr[i] !== arr[size-i-1]){
                flag = false;
            }
        }
        flag? counter=2: '';
        if(number<=99) 
            counter=0
        number++;
        j++;
    }
    
    if(counter!=2) {
        return 0;
    }
    
    if(counter==2 && j==1){
        return 2
    }else {return 1}
}
