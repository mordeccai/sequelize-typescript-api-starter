import {Request, Response} from 'express';
import { User, Country } from 'app/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import event from 'app/events';

export class AuthController {
    static async login(req: Request, res: Response){
        const { email, password } = req.body;
        const user = await User.find({where:{
            email
        }, include: [Country]});
        if(!user){
            return res.status(402).json({
                success: false,
                field: 'email',
                message: 'Incorrect credentials'
            });
        }
        if(await bcrypt.compare(password, user.password)){
            return res.status(200).json({
                success: true,
                payload: {
                    user,
                    token: jwt.sign({uuid: user.id}, process.env.APP_KEY)
                },
                message: 'Login successful'
            });
        } else {
            return res.status(402).json({
                success: false,
                field: 'password',
                message: 'Incorrect credentials'
            });
        }
    }

    static async signup(req: Request| any , res: Response){
        const photo = req.file? req.file.filename: "";
        const userDetails = {...req.body, photo: photo};
        const user = await User.create(userDetails);

        res.status(200).json({
            success: true,
            message: 'Signup successful'
        });
        event.emit('new:user', user);
    }

}