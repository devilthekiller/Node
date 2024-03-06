const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task with id:${taskID}` })
        }
        res.json({ task })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.status(200).json({ tasks })
//     } catch (error) {
//         res.status(500).json({ msg: error })

//     }
// }
const deleteTask = async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return res.status(404).json({ msg: `No task with id:${taskID}` })
    }
    const tasks = await Task.find({})
    res.status(200).json({ task, tasks })
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body ,{new:true , runValidators:true } )
        if (!task) {
            return res.status(404).json({ msg: `No task with id:${taskID}` })
        }
        res.status(200).json({ task })

    } catch (error) {

    }

}



module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}

// const Task = require("../models/Task");

// const getAllTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});
//         res.json({ tasks });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const createTask = async (req, res) => {
//     try {
//         const task = await Task.create(req.body);
//         res.status(201).json({ task });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// const getTask = async (req, res) => {
//     try {
//         const task = await Task.findById(req.params.id);
//         if (!task) {
//             return res.status(404).json({ error: "Task not found" });
//         }
//         res.json({ task });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const deleteTask = async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id);
//         if (!task) {
//             return res.status(404).json({ error: "Task not found" });
//         }
//         res.json({ message: "Task deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const updateTask = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
//         if (!task) {
//             return res.status(404).json({ error: "Task not found" });
//         }
//         res.json({ task });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// module.exports = {
//     getAllTasks,
//     getTask,
//     updateTask,
//     deleteTask,
//     createTask,
// };
