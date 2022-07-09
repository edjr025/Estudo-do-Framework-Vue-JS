function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1, 2, 3)

logParams(1,2,3,4,5) //ignorou parametros adcionais 4 e 5

logParams(1,2)


function defaultParams(a, b, c = 0){
    console.log(a,b,c)
}

defaultParams(7, 8, 9)
defaultParams(2, 6,)
defaultParams(1)


function logNums(nums){
    for(let n of nums){
        console.log(n)
    }
}

logNums([1,2,3,4])


function logNumsWithSpread(...nums){
    // for(let n of nums){
    //     console.log(n)
    // } 
    console.log(nums)
}

logNumsWithSpread(2,5,9,74,21)


function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    return total
}

console.log(sumAll(1,3,5,9))