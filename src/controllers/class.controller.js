import { getClassesQuery } from "../repositories/class.repositories.js"

export async function getClasses(req, res) {
    try {
        const {rows: classes} = await getClassesQuery()
        res.status(200).send(classes)
    }catch (err) {
        res.status(500).send(err.message)
    }
}