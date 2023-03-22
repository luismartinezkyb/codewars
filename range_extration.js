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
