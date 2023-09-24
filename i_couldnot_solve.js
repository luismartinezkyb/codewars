function ArrayChallenge(strArr) {
    let finalTotal = []
    let newArr=strArr;
    for (let i = 0; i < newArr.length; i++) {
        const element = newArr[i].split('');
        for (let j = 0; j < element.length; j++){
            
        }
        console.log(element[j]);
        
    }
    finalTotal.push(givemeall(newArr));


    
    return 1;
}

function givemeall(strArr){
    let pos1x= null;
    let pos1y = null;
    let pos2= [];
    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i].split('');
        if (element.indexOf('1')!==-1){
            pos1x=element.indexOf('1');
            pos1y=i;
        }
        
        element.map((e, index)=>{
            e==2? pos2.push(`${i},${index}`):'';
        });
        
        
    }
    if (pos2.length===0) return 0;
    
    
    let total=0;
    
    for(let i = 0; i < pos2.length; i++){
        const pos = pos2[i];

        let x=pos.split(',').pop()
        let y=pos.split(',').shift()
        let temp=0
        temp= Math.abs(x-pos1x) + Math.abs(y-pos1y)
        
        if(total===0 || temp<=total){
            total=temp;
        }
        
    }
    return total
}

console.log(ArrayChallenge(["000", "100", "202"] ));