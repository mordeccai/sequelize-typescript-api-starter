import * as bodyParser from 'body-parser';
import express from 'express';
import apiRoutes from 'app/routes';
import "universal-dotenv"

const app = express();
const port = process.env.PORT || 3030;

// Configure express midlewares
app.use(require('helmet')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization");
	next();
});


// Set api routes
app.use('/api', apiRoutes);
app.use('**', (req, res)=>{
	res.status(400).json({
		success: false,
		message: "Requested resource not found."
	})
});

app.listen(port, ()=>{
    console.log(`Listening on port ${ port }`);
})