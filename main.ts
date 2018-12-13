import "universal-dotenv"
import 'express-async-errors';
import 'express-router-group';
import 'server';
import db from 'database';
import chalk from 'chalk';

// Connect to database and sync
db.sync({ alter: true }).then(()=>{
	console.log(chalk.green("Database connection successful"));
}).catch((e)=>{
	console.error(chalk.red(e));
});