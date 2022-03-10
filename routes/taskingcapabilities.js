const router = require( 'express' ).Router();
const taskingcapabilities = require( '../services/taskingcapabilities' );

router.get( '/', async function ( req, res, next ) {
    try {

        res.json( await taskingcapabilities.getMultiple( ) );

    } catch ( err ) {

        console.error( 'Error while getting tasking capabilities', err.message );
        next( err );

    }
} );

module.exports = router;