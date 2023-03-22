function permutations(string, result = []) {
  let input = string.split('');
  if (input.length === 0) {
    result.push([]);
  } else {
    for (let i = 0; i < input.length; i++) {
      const actual = input[i];
      const remaining = input.slice(0, i).concat(input.slice(i + 1));
      
    
      permutations(remaining.join('')).map((e)=>{
        let permutation = actual.concat(e);
        if(!result.includes(permutation) && e!=actual) {
          console.log(e, actual)
          result.push(permutation);
        }
      });
      
    }
  }
  return result;
}

console.log(permutations("ab"));
console.log(permutations("sas"));
console.log(permutations("ede"));
  

// result = [], current = []) {
//   if (input.length === 0) {
//     result.push(current.slice());
//   } else {
//     const used = new Set();
//     for (let i = 0; i < input.length; i++) {
//       const currentItem = input[i];
//       if (!used.has(currentItem)) {
//         used.add(currentItem);
//         const remaining = input.slice(0, i).concat(input.slice(i + 1));
//         current.push(currentItem);
//         permutationsWithoutRepetition(remaining, result, current);
//         current.pop();
//       }
//     }
//   }
//   return result;
// }
