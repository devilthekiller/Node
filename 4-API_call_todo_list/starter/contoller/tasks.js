const getAllTasks = ((req, res) => {
    res.send("all itenms")
})

const createTask = ((req, res) => {
    // res.send("createTask")
    res.json(req.body)
})
const getTask = ((req, res) => {
    // res.send("getTask")
    res.json({ id: req.params.id })
})
const deleteTask = ((req, res) => {
    // res.send("deleteTask")
    res.json({ id: req.params.id })
})
const updateTask = ((req, res) => {
    res.send("updateTask")
})



module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}