import "universal-dotenv"
import 'express-async-errors';
import 'express-router-group';
import 'server';
import db, { seedDatabase } from 'database';
import { SyncOptions } from "sequelize";
import chalk from 'chalk';


// Database syncing options
const syncOptions: SyncOptions = {
	force: true,
}

// Connect to database and sync
db.sync(syncOptions).then(()=>{
	console.log(chalk.green("Database connection successful"));
	if(syncOptions.force){
		seedDatabase();
	}
}).catch((e)=>{
	console.error(chalk.red(e));
});