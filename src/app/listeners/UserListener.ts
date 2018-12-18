import { User } from "app/models";
import { sendSMS } from "app/helpers";

class UserListener {
    static async register(user: User){
        const firstName = user.full_name.split(' ')[0];
        const phoneNumber = user.phone_number;
        let message = `Hi ${firstName}, we are glad you registered to ${process.env.APP_NAME}. We will use this phone number to contact you for verification.`;
        await sendSMS([phoneNumber], message);
    }
}

export default UserListener;