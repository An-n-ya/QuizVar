const mysql = require('mysql')

const db = mysql.createPool({
    host: '140.143.170.59',
    user: 'quizvar',
    password: '83LDNLYNF4aNXyae',
    database: 'quizvar'
})

module.exports = db