import { Router } from 'express';
import { UserController, AuthController } from 'app/controllers';
import { findUser, auth } from 'app/middlewares';
import 'express-router-group'

const router:any = Router()

router.post('/login', AuthController.login)
router.post('/signup', AuthController.signup)
router.group('/users', (router: Router)=>{
    router.use(auth)
    router.get('/', UserController.index);
    router.get('/:userId',[findUser], UserController.show);
    router.post('/', UserController.store);
    router.put('/:userId', [findUser], UserController.update);
    router.delete('/:userId', [findUser], UserController.destroy);
})

export default router