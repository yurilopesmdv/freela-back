import {db} from "../connection/database.connection.js"

export function getAllProjectsQuery() {
    return db.query(`SELECT * FROM projects;`)
}