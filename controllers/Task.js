const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      runValidators: true,
      new: true
    })
    if(!task){
      return res.status(404).json({msg:`No task with id: ${taskID}`})
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({error})
  }
}

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    res.status(404).json({ msg: `No task with ID: ${taskID}` })
  }
  res.status(200).json({ task })
}

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
      return res.status(404).json({ msg: `No task with ID: ${taskID}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = {
  getAllTasks,
  createTasks,
  updateTask,
  deleteTask,
  getTask,
}