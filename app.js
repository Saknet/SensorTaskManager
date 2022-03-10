const express = require( 'express' );
const logger = require( 'morgan' );
const cors = require( 'cors' );
const cookieParser = require( 'cookie-parser' );

const app = express();
require( 'express-async-errors' );

const indexRouter = require( './routes/index' );
const taskingcapabilitiesRouter = require( './routes/taskingcapabilities' );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( cors() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );

app.use( '/sensorasset', indexRouter );
app.use( '/sensorasset/taskingcapabilities', taskingcapabilitiesRouter );

module.exports = app;