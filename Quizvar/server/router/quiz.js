const express = require('express')
const quiz = require('../router_handler/quiz')

const router = express.Router()

router.get('/getquiz', quiz.getquiz)
router.post('/insert', quiz.insert)
router.delete('/delete/:id', quiz.delete)
router.put('/update', quiz.update)

module.exports = router