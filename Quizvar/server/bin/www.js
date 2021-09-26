var app = require('../server');
var fs = require('fs')
var https = require('https')
var path = require('path')

const options = {
    key: fs.readFileSync(path.join(__dirname, '../cert/qiucle.key')),
    cert: fs.readFileSync(path.join(__dirname, '../cert/qiucle.pem'))
}

const SSL_PORT = 443;
const httpsServer = https.createServer(options, app);
httpsServer.listen(SSL_PORT, () => {
    console.log(`HTTPS Server is running on: https://localhost:${SSL_PORT}`);
});