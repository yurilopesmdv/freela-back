import { getAllDeliveriesQuery, getAllProjectsQuery, getDelieverieByIdQuery, postProjectQuery, updateDeliverieQuery } from "../repositories/project.repositories.js"

export async function postProject(req, res) {
    const {projectId, classId, projectUrl, userId} = req.body
    try {
        await postProjectQuery(projectId, classId, projectUrl, userId)
        res.sendStatus(201)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAllProjects(req, res) {
    try {
        const {rows: projects} = await getAllProjectsQuery()
        res.status(200).send(projects)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAllDeliveries(req,res) {
    try {
        const { rows: deliveries} = await getAllDeliveriesQuery()
        res.status(200).send(deliveries)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getDelieverieById(req, res) {
    const {id} = req.params
    try {
        const { rows: deliverie} = await getDelieverieByIdQuery(id)
        res.status(200).send(deliverie[0])
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateDeliverie(req, res) {
    const {id} = req.params
    const {grade} = req.body
    try {
        await updateDeliverieQuery(id, grade)
        res.sendStatus(200)
    }catch (err) {
        res.status(500).send(err.message)
    }
}