const  asyncHandler = require('express-async-handler')


// @desc  Get goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).send({ message: 'Get goals' })
})

// @desc  Create goal
// @route Post /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).send(req.body.text)
})

// @desc  Update goal
// @route Put /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    
    res.status(200).send({ message: `Updated goal ${req.params.id}` })
})

// @desc  Delete goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).send({ message: `Deleted goal ${req.params.id}` })
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}