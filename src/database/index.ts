import { Sequelize } from 'sequelize-typescript';
import dbConfig from 'config/database';
import "universal-dotenv"
import { User } from 'app/models';

const db = new Sequelize(dbConfig);
db.addModels([
    User
])

export default db;