let nums = [1,2,3,4,5]

let sum = nums.reduce((acc,current) => acc + current)
console.log(sum)

let avg = (acc, el, indice, array) => {
    if(indice === array.length - 1){
        return (acc + el) / array.length
    }else{
        return acc + el
    }
} 

let result = nums.reduce(avg)
console.log(result)

let students = [
    {
        name: 'Jake',
        score: 6.4
    },
    {
        name: 'Susan',
        score: 8.6
    },
    {
        name: 'Emma',
        score: 9.4
    },
    {
        name: 'Ralf',
        score: 4.5
    },
    {
        name: 'Peter',
        score: 9.1
    },
    {
        name: 'Alexis',
        score: 5.3
    },
    {
        name: 'Drake',
        score: 10
    },
]


