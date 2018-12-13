import {Request, Response} from 'express';
import { User } from 'app/models';
import chalk from 'chalk';
declare var lest: any;

export class UserController {
    static async index(req: Request, res: Response){
        const users = await User.findAll();
        res.status(200).send({
            "success": true,
            "payload": users
        })
    }

    static async store(req: Request, res: Response){
        const { full_name, email, password } = req.body;
        const user = await User.create({
            full_name,
            email,
            password
        })
        const { user: currentUser } = res.locals.auth
        return res.status(200).json({
            success: true,
            currentUser,
            message: "User added successfuly"
        })
    }


    static async show(req: Request, res: Response){
        const { user } = res.locals; 
        res.status(200).json({
            success: true,
            payload: user
        })
    }

    static async update(req: Request, res: Response){
        const { user } = res.locals; 
        const { name, password } = req.body;
        user.update({
            name: name,
            password: password
        })
        res.status(200).json({
            success: true,
            message: "User updated successfuly"
        })
    }

    static async destroy(req: Request, res: Response){
        const { user } = res.locals;
        lest();
        res.status(200).json({
            success: true,
            message: "User deleted successfuly"
        })
    }

}