import db from 'database';
import './src/server';

// Connect to database and sync
db.sync({ alter: true }).then(()=>{
	console.log("\x1b[32m", "Database connection successful");
}).catch((e)=>{
	console.error("\x1b[31m", e);
})