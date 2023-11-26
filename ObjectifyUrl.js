// // Converts a URL Query String into an object map
// function convertQueryToMap(query) {
//   const whitespace = /%20/i;
//   if(query.length===0) return {};
//   const splitedArray = query.split('&');
//   let result = []
//   for(let i = 0; i<splitedArray.length; i++){
//     const data = splitedArray[i]
//     const equal = data.split('=')
//     let adding = []
    
//     let res = equal.pop();
//     res = res.split(whitespace).join(' ');
//     res = `"${decodeURIComponent(res)}"`

//     equal[0].split('.').reverse().reduce((acc, val) =>{
//       acc = `{"${val}":${res} }`
      
//       res = acc
      
//       adding.push(acc)
//     }, {})
//     const final = JSON.parse(adding.pop())
//     // console.log(final)
//     result.push(final)
//     //Object.assign(result, final)
//   }
//   const objectMerged = mergeObjects(...result)
  
//   return JSON.stringify(objectMerged);
// }

// function mergeObjects(...objects) {
//   const result = {};
//   for (const obj of objects) {
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         if (typeof obj[key] === 'object' && result.hasOwnProperty(key) && typeof result[key] === 'object') {
//           result[key] = mergeObjects(result[key], obj[key]);
//         } else {
//           result[key] = obj[key];
//         }
//       }
//     }
//   }

//   return result;
// }

function convertQueryToMap(query) {
  var obj = {};
  query.split('&').map(function(params) {
    var parts = params.split('=');
    if (!parts[1]) return {};
    parts[0].split('.').reduce(function(cur, next, i, arr) {
      if (!cur[next]) cur[next] = {};
      if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
      return cur[next];
    }, obj);
  });
  return obj;
}

console.log(convertQueryToMap('user.name.firstname=23&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'));