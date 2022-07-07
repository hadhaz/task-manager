const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTasks,
    getTask,
    deleteTask,
    updateTask
} = require('../controllers/Task')

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)

module.exports = router