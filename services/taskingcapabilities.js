const dbService = require( './db' );

async function findByThing ( thing ) {
    const thing_url = 'https://geo.fvh.fi/features/collections/thing/items/' + thing;

    const data = await dbService.query(
            "SELECT tc.taskingParameters, tc.name, tc.description, a.name, a.description, a.encodingtype, a.metadata, a.properties FROM taskingcapability tc INNER JOIN actuator a ON tc.actuator_id = a.id WHERE tc.thing = $1 ",
            [ thing_url ]
        );    

    return {
        data
    };
}

module.exports = {
    findByThing
};