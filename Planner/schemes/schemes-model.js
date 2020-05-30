const db = require('../dbConfig');
module.exports = {
    find,
    findById,
    findProject,
    addToDb,
    updateProjectAspect
}

function find (table) {
    return db(table)
}
function findById(table, id){
    return(
        db(table)
            .where({id})
    )
}

function findProject(id){
    return(
        db('Projects')
            .where(`project_id`, id)
    )
}

function addToDb(table, data){
    return(
        db(table)
            .insert(data)
    )
}

function updateProjectAspect(table, data, id){
    return(
        db(table)
        .where({id})
        .update(data)
    )
}