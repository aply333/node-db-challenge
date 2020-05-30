const express = require('express');
const db = require('./schemes-model');
const router = express.Router();

const catchGet = (target) => { error: `__CATCH__ Failed to retrieve ${target}.`}
const catchPost = (target) =>{ error: `__CATCH__ Failed to add to ${target}.`}
const catchPut = (target) => { error: `__CATCH__ Failed to update ${target}.`}

const postSuccess = (target) => { success: `__POST__ Succeeded adding ${target}`}
const putSuccess = (target) => { success: `__PUT__ Changes to ${target} made.`}

const rDB = 'Resources';

router
    .route("/resources")
        .get((req, res) =>{
            db.find(rDB)
                .then(supplies => res.status(200).json(supplies))
                .catch( () => res.status(404).json(catchGet("resources")))
        })
        .post((req, res) => {
            db.addToDb(rDB, req.body)
                .then( () => res.status(201).json(postSuccess(rDB), req.body))
                .catch( () => res.status(501).json(catchPost(rDB)))
        })
router
    .route("/resources/:id") 
        .get((req, res) => {
            const {id} = req.params;
            db.findById(rDB, id)
                .then(resource => res.status(200).json(resource))
                .catch( () => res.status(404).json(catchGet("resource")))
        })
        .put((req, res) => {
            const {id} = req.params;
            db.updateProjectAspect(rDB, req.body, id)
                .then( () => res.status(201).json(putSuccess("resource")))
                .catch( () => res.status(501).json(catchPut('resource')))
        })

module.exports = router;