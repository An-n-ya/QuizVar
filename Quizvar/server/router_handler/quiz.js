const mysql = require('mysql')
const db = require('../db/index.js')

// 查找所有的 Quiz
const sql_getquiz = 'select * from quizvar.category'

// 按 id 查找 Quiz
const sql_search = "select * from quizvar.category where `quiz_id` = ?"

// 插入一个 Quiz
const sql_insert = "INSERT INTO quizvar.category (quiz, ans, category, date, editdate, author, quizbook) VALUES (?, ?, ?, ?, ?, ?, ?);"

// 按 id 删除 Quiz
const sql_delete = "DELETE FROM `quizvar`.`category` WHERE (`quiz_id` = ?);"

// 按 id 编辑 Quiz
const sql_update = "UPDATE `quizvar`.`category` SET `quiz` = ?, `ans` = ?, `category` = ?, `editdate` = ?, `quizbook` = ?  WHERE (`quiz_id` = ?);"



exports.update = (req, res) => {
    const body = req.body
    if (!body.id) {
        return res.send({
            status: 401,
            message: 'id 不能为空'
        })
    } else if (!body.quiz || !body.ans) {
        return res.send({
            status: 401,
            message: '问题或者答案不能为空！',
        })
    }
    db.query(sql_search, [body.id], (err, results) => {
        if (err) {
            return res.send({
                status: 404,
                message: err.message
            })
        } else if (results.length == 0) {
            return res.send({
                status: 204,
                message: '没有找到名为' + body.id + '的 Quiz'
            })
        } else {
            // console.log(results);
            let { category, quizbook } = results[0]
            // 这里的代码都是异步的，所以后续步骤应该写在这里

            // 如果没有设置 category，则使用原来的 category
            if (!body.category) {
                body.category = category
                body.quizbook = quizbook
            }
            // 准备 sql 语句
            const inserts = [body.quiz, body.ans, body.category, Date.now(), body.id, quizbook]
            const sql = mysql.format(sql_update, inserts)

            db.query(sql, (err, results) => {
                if (err) {
                    return res.send({
                        status: 400,
                        message: err.message
                    })
                }
                return res.send({
                    status: 200,
                    message: '更新成功',
                    results: results
                })
            })
        }
    })


}

exports.delete = (req, res) => {
    const params = req.params
    // console.log(id);
    if (!params.id) {
        return res.send({
            status: 401,
            message: 'id 不能为空！'
        })
    }
    const sql = mysql.format(sql_delete, params.id)
    db.query(sql, (err, results) => {
        if (err) {
            return res.send({
                status: 400,
                message: err.message
            })
        }
        return res.send({
            status: 200,
            message: '删除成功',
            results: results
        })
    })
}

exports.insert = (req, res) => {
    const body = req.body

    if (!body.quiz || !body.ans) {
        return res.send({
            status: 401,
            message: '问题或者答案不能为空！',
        })
    }
    // preparing queries
    const inserts = [body.quiz, body.ans, body.category, Date.now(), Date.now(), body.author, body.quizbook]
    const sql = mysql.format(sql_insert, inserts)

    db.query(sql, (err, results) => {
        if (err) {
            return res.send({
                status: 400,
                message: err.message
            })
        }
        return res.send({
            status: 200,
            message: '添加成功',
            results: results
        })
    })
}


exports.getquiz = (req, res) => {
    db.query(sql_getquiz, (err, results) => {
        if (err) {
            return res.send({ status: 400, message: err.message })
        } else {
            return res.send({ status: 200, message: '获取成功', QuizSet: results })
        }
    })
}