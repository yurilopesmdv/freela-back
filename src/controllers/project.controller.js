export async function postProject(req, res) {
    const {projectId, classId, projectUrl, userId} = req.body
    try {
        res.sendStatus(201)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAllDeliveries(req,res) {
    try {
        const deliveries = []
        res.status(200).send(deliveries)
    }catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getDelieverieById(req, res) {
    const {id} = req.params
    try {
        const deliverie = {}
        res.status(200).send(deliverie)
    }catch (err) {
        res.status(500).send(err.message)
    }
}