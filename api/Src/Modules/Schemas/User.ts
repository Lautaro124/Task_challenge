import { Schema } from 'mongoose'

interface User{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const user = new Schema<User>({
    firstName: { type: String, required: true, validate: {
        validator: (value: string) => {
            const re = /^[^{}<>#$%&~^`/*+¿?¡!@]*$/g;

            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    } },
    lastName: { type: String, required: true, validate: {
        validator: (value: string) => {
            const re = /^[^{}<>#$%&~^`/*+¿?¡!@]*$/g;

            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    } },
    email: { type: String, required: true, validate: {
        validator: function (value: any) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    }},
    password: { type: String, required: true }

});

export default user