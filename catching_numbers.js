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

console.log("result1", isInteresting(123321, [1337, 256]))
console.log("result2", isInteresting(1333, [1337, 256]))
console.log("result3", isInteresting(11211, [1337, 256]))
console.log("result4", isInteresting(4319, [1337, 256]))
console.log("result5", isInteresting(67888, [1337, 256]))
console.log("result6", isInteresting(3210, [1337, 256]))