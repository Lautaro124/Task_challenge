import { Schema } from 'mongoose'

interface User{
    firstName: string;
    lastName: string;
    email: string;
    img?: string;
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
    img: { type: String, default: 'https://us.123rf.com/450wm/kritchanut/kritchanut1403/kritchanut140300127/26826364-silueta-del-hombre-an%C3%B3nimo-con-signo-de-interrogaci%C3%B3n.jpg?ver=6',validate: {
        validator: function (value: any) {
            const re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    } },
    password: { type: String, required: true }

});

export default user