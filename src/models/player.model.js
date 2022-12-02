import { model, Schema, Types } from 'mongoose';

const playerSchema = new Schema({
    photo: {
        type: String,
        require: [true, "Must provide player's photo"]
    },
    firstName: {
        type: String,
        maxLength: [25, 'Max characters allowed of 25'],
        require: [true, "Must provide player's first name"]
    },
    lastName: {
        type: String,
        maxLength: [25, 'Max characters allowed of 25'],
        require: [true, "Must provide player's last name"]
    },
    age: {
        type: Number,
        require: [true, "Must provide player's age"]
    },
    birthday: {
        type: Date,
        require: [true, "Must provide player's birthday"]
    },
    playerPosition: {
        type: String,
        require: [true, "Must provide player's position"]
    },
    numberJearsy: {
        type: Number,
        require: [true, "Must provide player's number jearsy"]
    },
    isStartingPlayer: {
        type: Boolean,
        require: [true, "Must expecify if player is starter or not"]
    },
    team: {
        type: Types.ObjectId,
        ref: 'team',
        require: [true, "Must provide a team id"]
    }
});

const Player = model('player', playerSchema);

export default Player;
