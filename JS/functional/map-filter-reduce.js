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

const greatStudent = student => student.score >= 6
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if(i === array.length - 1){
        return (acc + el) / array.length
    }else{
        return acc + el
    }
}

console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
)