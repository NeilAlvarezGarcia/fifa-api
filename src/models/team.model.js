import { model, Schema } from 'mongoose';

const teamSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'The team already exists'],
        require: [true, 'Must provide the name of the team']
    },
    teamFlag: {
        type: String,
        require: [true, 'Must provide the flag of the team'],
    },
    teamBadge: {
        type: String,
        require: [true, 'Must provide the badge of the team'],
    },
});

const Team = model('team', teamSchema);

export default Team;
