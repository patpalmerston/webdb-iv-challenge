const server = require('./api/server')

server.listen(5000, () => console.log('server live on port 5000'))

module.exports = server