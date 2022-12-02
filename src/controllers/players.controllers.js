import Player from "../models/player.model.js";

import tryCatchFunction from '../helpers/try-catch-function.js';
import badRequest from '../helpers/bad-request.js';

const addPlayer = tryCatchFunction(async (req, res) => {
    const player = await Player.create(req.body)

    res.status(200).json({
        status: true,
        player
    })
})

const getPlayersByTeam = tryCatchFunction(async (req, res) => {
    const { teamId } = req.body;

    if (!teamId) {
        return res.status(401).json({
            status: false,
            error: {
                message: "A teamId must be provided"
            },
        })
    }

    const players = await Player.find({ team: teamId });

    res.status(200).json({
        status: true,
        data: players,
        numberHits: players.legnth,
    });
})

const getPlayer = tryCatchFunction(async (req, res) => {
    const { id } = req.params;
    const player = await Player.findById(id);

    res.status(200).json({
        status: true,
        data: player
    });
})

const updatePlayer = tryCatchFunction(async (req, res) => {
    const { params: { id }, body } = req;

    const playerUpdated = await Player.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: true,
        playerUpdated
    })
})

const deletePlayer = tryCatchFunction(async (req, res) => {
    const { params: { id } } = req;

    await Player.findByIdAndDelete(id);

    res.status(200).json({
        status: true,
        message: "Player was deleted successfuly"
    })
})

const validatePlayerData = (req, res, next) => {
    const { 
        photo, firstName, lastName, 
        age, birthday, playerPosition, 
        numberJearsy, isStartingPlayer, team 
    } = req.body;

    if (!photo || !photo.includes('https', 'http')) {
        return badRequest(res, "Must provide a  player's photo url image");
    }
    if (!firstName || !lastName) {
        return badRequest(res, "Must provide a  player's first and last name");
    }
    if (!age) {
        return badRequest(res, "Must provide a  player's age");
    }
    if (!birthday) {
        return badRequest(res, "Must provide a  player's birthdate");
    }
    if (!playerPosition) {
        return badRequest(res, "Must provide a  player's position");
    }
    if (!numberJearsy) {
        return badRequest(res, "Must provide a  player's number of jearsy");
    }
    if (isStartingPlayer === null || isStartingPlayer === undefined) {
        return badRequest(res, "Must indicate if  player's starting player");
    }
    if (!team) {
        return badRequest(res, "Must provide team id");
    }

    next();
}

export {
    getPlayer, 
    getPlayersByTeam,
    addPlayer,
    updatePlayer,
    deletePlayer,
    validatePlayerData
}