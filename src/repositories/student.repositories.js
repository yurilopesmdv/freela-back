import {db} from "../connection/database.connection.js"

export async function createStudentQuery(name, cpf, email, picture) {
    return await db.query(`INSERT INTO users (name, cpf, email, picture) VALUES ($1, $2, $3, $4);`, [name, cpf,email, picture])
}
export async function createRegistrarionQuery(userId, classId) {
    return await db.query(`INSERT INTO registrations (userid, classid) VALUES ($1, $2);`, [userId, classId])
}
export async function getStudentByCpf(cpf) {
    return await db.query(`SELECT * FROM users WHERE cpf=$1;`, [cpf])
}
export async function getAllStudentsQuery() {
    return await db.query(`
    SELECT u.id, u.name, u.picture, r.classid
        FROM registrations r
        JOIN users u ON u.id = r.userid
    ;`)
}
export async function getStudentByIdQuery(id) {
    return await db.query(`SELECT * FROM users WHERE id=$1;`, [id])
}
export async function getRegistrationByUserId(id) {
    return await db.query(`
        SELECT c.class AS name, r.entrydate, r.exitdate
            FROM registrations r
            JOIN classes c ON c.id = r.classid
            WHERE r.userid = $1
    ;`, [id])
}