import { Sequelize } from 'sequelize-typescript';
import dbConfig from 'config/database';
import { User, Country } from 'app/models';
import fs from 'fs';
import chalk from 'chalk';
import seed from 'database/seeder';

const db = new Sequelize(dbConfig);


db.addModels([
    Country,
    User,
])

export const seedDatabase = async () => {
    seed(db, [
    ])
}

export default db;