import { Router } from 'express';
import { 
    addTeam, 
    getTeam, 
    getTeams, 
    updateTeam,
    deleteTeam,
    validateTeamData
} from '../controllers/teams.controllers.js';

const router = Router();

router.route('/').post(validateTeamData, addTeam).get(getTeams);
router.route('/:id').put(validateTeamData, updateTeam).get(getTeam).delete(deleteTeam);

export default router;