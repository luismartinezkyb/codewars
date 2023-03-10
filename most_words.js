function topThreeWords(text) {
    
    let words = text.toLowerCase().match(/\b[A-Za-z']+\b/g); //first i filter and separate every word
    let result = [];
    if(!words){ return result} //i return with empty if there is no words
    result = [...new Set(words)] //i create a new clean and unique array
    let array_max = result.map(e => words.filter(el => el==e).length) //i get the number of repetitions words and
    let final = []
    for (let i = 0; i < array_max.length && i<3; i++) { //do a for to search 3 times max and min 1 if the array is 1 length
        final.push(result[array_max.indexOf(Math.max(...array_max))]) //i push ito the result the position of the max element
        array_max[array_max.indexOf(Math.max(...array_max))]=0 //i change that position value to 0 to remove the pointer from that area
    }
    return final
}

try {
    console.log(topThreeWords("que Hola que estas tal co#mo es que estas //esta vez jiji"))
console.log(topThreeWords("  //wont won't won't "))
console.log(topThreeWords("  , e   .. "))
console.log(topThreeWords("  ,   .. "))
} catch (error) {
    console.log(e)
}
