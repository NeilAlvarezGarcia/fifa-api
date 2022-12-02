import Coaching from "../models/coaching-staff.model.js";
import tryCatchFunction from '../helpers/try-catch-function.js';
import badRequest from "../helpers/bad-request.js";

const addCoach = tryCatchFunction(async (req, res) => {
    const coach = await Coaching.create(req.body);

    res.status(201).json({
        status: true,
        coach
    })
})

const getCoachesByTeam = tryCatchFunction(async (req, res) => {
    const { teamId } = req.body;

    if (!teamId) {
        return badRequest(res, "A teamId must be provided");
    }

    const coaches = await Coaching.find({ team: teamId });

    res.status(200).json({
        status: true,
        data: coaches,
        numberHits: coaches.legnth,
    });
})

const getCoach = tryCatchFunction(async (req, res) => {
    const { id } = req.params;
    const coach = await Coaching.findById(id);

    res.status(200).json({
        status: true,
        data: coach
    });
})

const updateCoach = tryCatchFunction(async (req, res) => {
    const { params: { id }, body } = req;

    const coachUpdated = await Coaching.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: true,
        coach: coachUpdated
    })
})

const deleteCoach = tryCatchFunction(async (req, res) => {
    const { params: { id } } = req;

    await Coaching.findByIdAndDelete(id);

    res.status(204).json({
        status: true,
        message: "coach was deleted successfuly"
    })
})

const validateCoachData = (req, res, next) => {
    const { 
        firstName, lastName, age, 
        birthday, rol, team 
    } = req.body;

    if (!firstName || !lastName) {
        return badRequest(res, "Must provide a  coach's first and last name");
    }
    if (!age) {
        return badRequest(res, "Must provide a  coach's age");
    }
    if (!birthday) {
        return badRequest(res, "Must provide a  coach's birthdate");
    }
    if (!rol) {
        return badRequest(res, "Must provide a  coach's rol");
    }
    if (!team) {
        return badRequest(res, "Must provide team id");
    }

    next();
}


export {
    getCoach, 
    getCoachesByTeam,
    addCoach,
    updateCoach,
    deleteCoach,
    validateCoachData
}