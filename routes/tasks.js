const router = require( 'express' ).Router();
const tasks = require( '../services/tasks' );

router.get( '/findtasksbytaskingcapability/:taskingcapabilityID', async function ( req, res, next ) {

//    const id = parseInt(req.params.taskingcapabilityID);
    const id = 1;

    try {

        res.json( await tasks.findByTaskingCapability( id ) );

    } catch ( err ) {

        console.error( 'Error while getting tasks', err.message );
        next( err );

    }
} );

module.exports = router;