const express = require('express');
const db = require('./schemes-model');
const router = express.Router();

const catchGet = (target) => { error: `__CATCH__ Failed to retrieve ${target}.`}
const catchPost = (target) =>{ error: `__CATCH__ Failed to add to ${target}`}
const postSuccess = (target) => { success: `__POST__ Succeeded adding ${target}`}

const pDB = 'Projects'

router
    .route("/projects")
        .get((req, res) =>{
            db.find(pDB)
                .then(projects => res.status(200).json(projects))
                .catch( () => res.status(404).json(catchGet("projects")))
        })
        .post((req, res) => {
            db.addToDb(pDB, req.body)
                .then( () => res.status(201).json(postSuccess(pDB), req.body))
                .catch( () => res.status(501).json(catchPost(pDB)))
        })
router
    .route("/projects/:id") 
        .get((req, res) => {
            const {id} = req.params;
            db.findProject(id)
                .then(project => res.status(200).json(project))
                .catch( () => res.status(404).json(catchGet("project")))
        })


module.exports = router;