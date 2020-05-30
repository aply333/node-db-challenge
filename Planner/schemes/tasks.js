const express = require('express');
const db = require('./schemes-model');
const router = express.Router();

const catchGet = (target) => { error: `__CATCH__ Failed to retrieve ${target}.`}
const catchPost = (target) =>{ error: `__CATCH__ Failed to add to ${target}.`}
const catchPut = (target) => { error: `__CATCH__ Failed to update ${target}.`}

const postSuccess = (target) => { success: `__POST__ Succeeded adding ${target}`}
const putSuccess = (target) => { success: `__PUT__ Changes to ${target} made.`}

const tDB = 'Tasks'

router
    .route("/tasks")
        .get((req, res) =>{
            db.find(tDB)
                .then(tasks => res.status(200).json(tasks))
                .catch( () => res.status(404).json(catchGet("tasks")))
        })
        .post((req, res) => {
            db.addToDb(tDB, req.body)
                .then( () => res.status(201).json(postSuccess(tDB), req.body))
                .catch( () => res.status(501).json(catchPost(tDB)))
        })

router
    .route("/tasks/:id") 
        .get((req, res) => {
            const {id} = req.params;
            db.findById(tDB, id)
                .then(task => res.status(200).json(task))
                .catch( () => res.status(404).json(catchGet("task")))
        })
        .put((req, res) => {
            const {id} = req.params;
            db.updateProjectAspect(tDB, req.body, id)
                .then( () => res.status(201).json(putSuccess("task")))
                .catch( () => res.status(501).json(catchPut('task')))
        })



module.exports = router;