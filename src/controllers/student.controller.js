import { createRegistrarionQuery, createStudentQuery, getAllStudentsQuery, getRegistrationByUserId, getStudentByCpf, getStudentByIdQuery } from "../repositories/student.repositories.js"

export async function createStudent(req, res) {
    const {name, email, cpf, picture, classId} = req.body
    try {
        await createStudentQuery(name, cpf, email, picture)
        const {rows: user} = await getStudentByCpf(cpf)
        await createRegistrarionQuery(user[0].id, classId)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAllStudents(req, res) {
    try{
        const {rows: students, rowCount} = await getAllStudentsQuery()
        if(rowCount === 0) return res.sendStatus(404)
        res.status(200).send(students)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getStudentById(req, res){
    const {id} = req.params
    try {
        const {rows: student} = await getStudentByIdQuery(id)
        const {rows: classes} = await getRegistrationByUserId(id)
        const {name, cpf, email, picture} = student[0]
        const object = {
            name,
            cpf,
            email,
            picture,
            turmas: []
        }
        classes.map(turma => object.turmas.push(turma))
        res.status(200).send(object)
    }catch (err) {
        res.status(500).send(err.message)
    }
}