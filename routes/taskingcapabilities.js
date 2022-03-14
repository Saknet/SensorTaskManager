const router = require( 'express' ).Router();
const taskingcapabilities = require( '../services/taskingcapabilities' );

router.get( '/findtaskingcapabilitiesbything/:thing', async function ( req, res, next ) {
    //    const id = parseInt(req.params.taskingcapabilityID);
    const thing = 157;

    try {

        res.json( await taskingcapabilities.findByThing( thing ) );

    } catch ( err ) {

        console.error( 'Error while getting tasking capabilities', err.message );
        next( err );

    }
} );

module.exports = router;