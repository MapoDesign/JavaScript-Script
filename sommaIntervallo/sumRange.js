let range = [];

function insertRange(start, end, increment = 1) {
    if (increment >= 0) {
        while (start <= end) {
            range.push(start);
            start = start + increment;
        }
    } else {
        while (start >= end) {
            range.push(start);
            start = start + increment;
        }
    }
    
    
    return range
} 

function sum(range) {
    let result = 0;
    for (let num of range) {
        result = result + parseInt(num);
    }

    return result;
}

let rangeSelected = insertRange(5,2,-1);
console.log("La somma di: " + insertRange(rangeSelected) + " è " + sum(rangeSelected));