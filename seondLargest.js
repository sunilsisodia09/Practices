function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        } else if(num > secondLargest && num !== largest){
            secondLargest = num;
        }
    }
    return secondLargest;
}

console.log(secondLargest([12,34,556,49,45,23,45,21]));