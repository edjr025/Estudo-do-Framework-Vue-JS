let nums = [1, 2, 3, 4, 5]

let dobro = nums.map(x => x * 2)
console.log(dobro)

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
        name: 'Peter',
        score: 9.1
    },
]

let scoresStudent = students.map(s => s.score)
console.log(scoresStudent)


//2ª forma
let getScores = el => el.score

console.log(
    students
        .map(getScores)
        .map(Math.floor)
)
   