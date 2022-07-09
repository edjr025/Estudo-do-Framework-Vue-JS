//Anonymous function
(function(a, b, c){
    return a + b + c
})

//function expression
let sum = function(a,b){
    return a + b
}

const result = sum(2, 3)
console.log(result)


const anotherSum = sum
console.log(anotherSum(7,9))