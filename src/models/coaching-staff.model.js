import { model, Schema, Types } from 'mongoose';

const coachingSchema = new Schema({
    firstName: {
        type: String,
        maxLength: [25, 'Max characters allowed of 25'],
        require: [true, "Must provide coach's first name"]
    },
    lastName: {
        type: String,
        maxLength: [25, 'Max characters allowed of 25'],
        require: [true, "Must provide coach's last name"]
    },
    birthday: {
        type: Date,
        require: [true, "Must provide coach's birthday"]
    },
    age: {
        type: Number,
        require: [true, "Must provide coach's age"]
    },
    nationatily: {
        type: String,
        require: [true, "Must provide coach's nationality"]
    },
    rol: {
        type: String,
        require: [true, "Must provide coach's rol"],
        enum: ['técnico', 'asistente', 'médico', 'preparador']
    },
    team: {
        type: Types.ObjectId,
        ref: 'team',
        require: [true, "Must provide a team id"]
    }
});

const Coaching = model('coaching-staff', coachingSchema);

export default Coaching;
