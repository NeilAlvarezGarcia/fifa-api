import badRequest from "../helpers/bad-request.js";
import tryCatchFunction from "../helpers/try-catch-function.js";
import Team from "../models/team.model.js";

const addTeam = tryCatchFunction(async (req, res) => {
    const { name, teamFlag, teamBadge } = req.body;
    
    const team = await Team.create({
        name: name.toLowerCase(),
        teamFlag,
        teamBadge,
    })

    res.status(201).json({
        status: true,
        team
    })
})

const getTeams = tryCatchFunction(async (req, res) => {
    const requestPage = parseInt(req.query.page);
    const requestSize = parseInt(req.query.size);

    const page = requestPage && requestPage > 0 ? requestPage : 1;
    const size = requestSize && requestSize > 0 ? requestSize : 10;

    const numberPage = (page - 1) * size;
    const numberSize = size * page;
    
    const teams = await Team.find().limit(numberSize).skip(numberPage).exec();

    res.status(200).json({
        status: true,
        data: teams,
        numberHits: size,
        page
    });
})

const getTeam = tryCatchFunction(async (req, res) => {
    const { id } = req.params;
    const team = await Team.findById(id);

    res.status(200).json({
        status: true,
        data: team
    });
})

const updateTeam = tryCatchFunction(async (req, res) => {
    const { params: { id }, body: { name, teamFlag, teamBadge } } = req;
    
    const teamUpdated = await Team.findByIdAndUpdate(
        id, 
        {
            name: name.toLowerCase(),
            teamFlag,
            teamBadge
        }, 
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json({
        status: true,
        teamUpdated
    })
})

const deleteTeam = tryCatchFunction(async (req, res) => {
    const { params: { id } } = req;

    await Team.findByIdAndDelete(id);

    res.status(204).json({
        status: true,
        message: "Team was deleted successfuly"
    })
})

const validateTeamData = (req, res, next) => {
    const { teamFlag, teamBadge, name } = req.body;

    if (!name) {
        return badRequest(res, 'Must provide a team name');
    }

    if (!teamFlag || !teamFlag.includes('https', 'http')) {
        return badRequest(res, "Must provide a flag team's url image");
    }

    if (!teamBadge || !teamBadge.includes('https', 'http')) {
        return badRequest(res, "Must provide a badge team's url image");
    }

    next();
}

export {
    getTeam, 
    getTeams,
    addTeam,
    updateTeam,
    deleteTeam,
    validateTeamData
}
