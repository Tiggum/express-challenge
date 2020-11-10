const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const students = [
    {
        name: 'caden',
        grades: 90,
        id: 0
    },
    {
        name: 'rohn',
        grades: 91,
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




const port = 3005
app.listen(port, () => console.log(`Grades app listening at http://localhost:${port}`))