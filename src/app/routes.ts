import { Router } from 'express';
import { UserController, AuthController } from 'app/controllers';
import { findUser, auth } from 'app/middlewares';
import  multer  from 'multer';

const upload = multer({ dest: 'public/images/' })
const router:any = Router();

// Authentication
router.post('/login', AuthController.login);
router.post('/signup', upload.single('photo'),  AuthController.signup);

// Users
router.group('/users', (router: Router)=>{
    router.use(auth);
    router.get('/', UserController.index);
    router.get('/:userId',[findUser], UserController.show);
    router.post('/', UserController.store);
    router.put('/:userId', [findUser], UserController.update);
    router.delete('/:userId', [findUser], UserController.destroy);
});

// Transaction
export default router;