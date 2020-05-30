const express = require("express");
const resources = require("./schemes/resources");
const tasks = require("./schemes/tasks");
const projects = require("./schemes/projects");

const server = express();

server.use(express.json());

server.use('/api', logger, resources);
server.use('/api', logger, tasks);
server.use('/api', logger, projects)

server.get("/", logger, (req, res)=> {
    res.send("<h1>Server Root</h1>")
})


function logger (req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method} at ${req.url}`);
    next();
}

module.exports = server;