import Coaching from "../models/coaching-staff.model.js";
import Player from "../models/player.model.js";
import Team from "../models/team.model.js";

const getInfo = async (_req, res) => {
    try {
        const teams = await Team.find();
        const players = await Player.find().sort({ age: 'asc' });
        const suplentPlayers = await Player.find({ isStartingPlayer: false });
        const [ oldestCoach ] = await Coaching.find({ rol: 'técnico' }).sort({ age: 'desc' });

        const info = {
            totalNumberOfTeams: teams?.length,
            totalNumberOfPlayers: players?.length,
            youngestPlayer: players[0] || null,
            oldestPlayer: players[players?.length - 1] || null,
            totalSuplentPlayers: suplentPlayers?.length,
            oldestCoach: oldestCoach || null,
            averageOfSuplentsByteam: Math.ceil(suplentPlayers?.length / teams?.length),
            averageOfPlayersByteam: Math.ceil(players?.length / teams?.length),
            averageOfPlayersAge: players[Math.floor((players?.length - 1) / 2)]?.age,
        }

        res.status(200).json({
            status: true,
            data: info
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: err,
        })
    }
}

export default getInfo;