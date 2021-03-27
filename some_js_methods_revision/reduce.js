// reduce method
const scores = [10, 20, 60, 40, 70, 90, 30]

const result = scores.reduce((acc, curr) => {
    if (curr > 50) {
        acc++
    }
    return acc
}, acc = 0)

console.log(result)

const score = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 720 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 170 },
    { player: 'crystal', score: 60 }
];

const totalScore = score.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score
    }
    return acc
}, acc = 0)

console.log(totalScore)