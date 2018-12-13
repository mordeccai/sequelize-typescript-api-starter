import { User } from "app/models";
import chalk from "chalk";

class UserListener {
    static async register(user: User){
        
        console.log(chalk.blue('NEW USER ADDED'), user.toJSON())
    }
}

export default UserListener;