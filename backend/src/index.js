const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsoket } = require('./websocket');


const app = express();
const server = http.Server(app);


setupWebsoket(server);


mongoose.connect('mongodb+srv://Elbert:elbert@cluster0-yvn9i.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);