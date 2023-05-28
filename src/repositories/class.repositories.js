import {db} from "../connection/database.connection.js"

export function getClassesQuery() {
    return db.query(`SELECT * FROM classes;`)
}