const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const students = [
    {
        name: 'caden',
        grades: {
            math: 90,
            english: 84,
            bio: 12
        },
        id: 0
    },
    {
        name: 'rohn',
        grades: {
            math: 85,
            english: 90,
            crafts: 100
        },
        id: 1
    }
]


app.get('/students', (req, res) => {
    if (req.query) {
        let name = req.query.name
        res.send(students.find(student => name === student.name))
    } else {
        res.send(students)
    }
    
})

app.get('/students/:id', (req, res) => {
    let id = parseInt(req.params.id)
    res.send(students.find(student => id === student.id))
})

app.get('/grades/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let student = students.find(student => id === student.id)
    res.send(student.grades)
})

app.post('/grades/', (req, res) => {
    let id = parseInt(req.body.id)
    let grade = req.body.grade
    console.log(id)
    let student = students.find(student => id === student.id)
    console.log(student)
    if (student && grade) {
        res.send("Grade successfully added")
    } else {
        res.send("Student not found")
    }
})

app.post('/register/', (req, res) => {
    let email = req.body.email
    let username = req.body.username
    if (email && username) {
        res.send(`Added ${username} with ${email}`)
    } else {
        res.send("malformed register")
    }
})




const port = 3005
app.listen(port, () => console.log(`Grades app listening at http://localhost:${port}`))