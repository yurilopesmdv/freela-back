export async function createStudent(req, res) {
    const {name, email, cpf, picture, classId} = req.body
    try {
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAllStudents(req, res) {
    try{
        const students = []
        res.status(200).send(students)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getStudentById(req, res){
    const {id} = req.params
    try {
        const result = []
        const student = {}
        res.status(200).send(student)
    }catch (err) {
        res.status(500).send(err.message)
    }
}