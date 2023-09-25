try {
    const startTime = performance.now();
    const result = quickSort([
        ...[4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4],
        ...[4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4],
        ...[4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4],
        ...[4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4],
        ...[4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4],
        ...[4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4]
    ])
    const lastTime = performance.now();
    console.log(result)
    console.log(`The code was excecuting at ${lastTime-startTime}`)
    
    
} catch (error) {
    console.log('error', error)
}
function quickSort(arr){
    const pivot = arr[0]
    let left = [];
    let right = [];
    if( arr.length<=1){
        return arr
    }
    for (let i = 1; i < arr.length; i++) {
        if(pivot>=arr[i]){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
        
    }
    
    return quickSort(left).concat([pivot],quickSort(right))
}

function bubbleSort(arr){
    
    for(let i = 1;i<arr.length;i++) {
        for(let j =1;j<arr.length;j++){
            if(arr[j-1]>arr[j]){
                let aux= arr[j]
                arr[j] = arr[j-1];
                arr[j-1]= aux
            }
        }
    }
    
    return arr
}


