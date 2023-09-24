function  getMaxThree(arr){
    let pos=0, max=0;
    for (let i = 0; i < arr.length; i++) {
        
        const sum = arr[i]+ arr[i+1] + arr[i+2]
        if(sum > max) {
            max = sum;
            pos = i;
        }
    }
    return {
        pos,
        max
    }
}
const result = getMaxThree([4,1,4,6,1,8,5,1,3,5,3,2,0,1,2,6,7,4])

console.log(result)