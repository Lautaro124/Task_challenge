import { Schema } from 'mongoose'

interface Task {
    name: string;
    img: string;
    status: boolean | string;
    reference?: Schema.Types.ObjectId;
}

const task = new Schema<Task> ({
    name: {type: String, required: true, validate: {
        validator: (value: string) => {
            const re = /^[^{}<>#$%&~^`/*+¿?¡!@]*$/g;

            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    }},
    img: { type: String, validate: {
        validator: function (value: any) {
            const re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    } },
    status: { type: Boolean, required: true, default: false },
    reference: { type: Schema.Types.ObjectId, required: false, ref: 'users'}
})

export default task