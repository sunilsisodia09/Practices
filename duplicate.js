// function removeDuplicates(arr){
//  return [...new Set(arr)];
// }
// const result = removeDuplicates([1,1,2,2,2,23,3,4,5,6,6]);
// console.log(result);


function duplicate(arr){
    return [...new Set(arr)];
}

const result = duplicate([12,12,1,2,3,4,5,5,6,55,43,32345,]);
console.log(result);