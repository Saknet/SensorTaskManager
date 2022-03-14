const dbService = require( './db' );

async function findByTaskingCapability ( id ) {

    const data = await dbService.query(
            "SELECT tc.id, tc.taskingParameters, tc.name, tc.description, json_agg( json_build_object( 'creationTime', t.creationTime, 'taskingParameters', t.taskingParameters )) AS tasks FROM task t INNER JOIN taskingcapability tc ON t.taskingcapability_id = $1 GROUP BY tc.id",
            [ id ]
        );    

    return {
        data
    };
}

module.exports = {
    findByTaskingCapability
};