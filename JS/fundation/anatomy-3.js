// function expression
const increment1 = function(n){
    return n + 1
}
console.log(increment1(1))

//Arrow Function is always anonymous
const increment2 = (n) => {    //uma função arrow é sempre anonima
    return n + 1
}
console.log(increment2(3))

const increment3 = n => {
    return n + 1
}
console.log(increment3(4))


const increment4 = n => n + 1
console.log(increment4(9))


const sum = (a,b) => a + b
console.log(sum(5,3))