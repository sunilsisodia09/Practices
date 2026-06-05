// function countVowels(str){
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0 ;
// }


// console.log( countVowels("my is sunil singh sisodia"));



function countVowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("sunil is good boy from selaqui"))