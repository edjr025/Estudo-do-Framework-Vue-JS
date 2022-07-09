let nums = [1, 2, 3, 4, 5]

let filtro = nums.filter(n => n >= 4)
console.log(filtro)


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

let aproved = students.filter(n => n.score >= 8)
console.log(aproved)


//2ª forma

let aproved2 = el => el.score >= 8
console.log(
    students.filter(aproved2)
)