const express = require('express')
const quiz = require('../router_handler/quiz')

const router = express.Router()

router.get('/getquiz', quiz.getquiz)
router.get('/quizbook/:cate', quiz.quizbook)
router.get('/nullquizbook', quiz.nullquizbook)
router.get('/searchbybook/:quizbook', quiz.searchByBook)
router.get('/category', quiz.category)
router.post('/insert', quiz.insert)
router.delete('/delete/:id', quiz.delete)
router.put('/update', quiz.update)

module.exports = router