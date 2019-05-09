const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

//middleware
server.use(morgan('short'))
server.use(helmet())
server.use(express.json())
server.use(cors());


//routes

server.get('/', (req, res) => {
  res.send('server is live')
});

module.exports = server