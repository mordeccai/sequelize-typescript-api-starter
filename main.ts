import "universal-dotenv"
import 'server';
import db from 'database';
import chalk from 'chalk';

// Connect to database and sync
db.sync({ alter: true }).then(()=>{
	console.log(chalk.green("Database connection successful"));
}).catch((e)=>{
	console.error(chalk.red(e));
})