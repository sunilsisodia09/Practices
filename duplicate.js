function removeDuplicates(arr){
 return [...new Set(arr)];
}
const result = removeDuplicates([1,1,2,2,2,23,3,4,5,6,6]);
console.log(result);
