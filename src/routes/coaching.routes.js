import { Router } from 'express';
import { 
    addCoach, 
    getCoach, 
    getCoachesByTeam, 
    updateCoach,
    deleteCoach,
    validateCoachData
} from '../controllers/coaching.controllers.js';

const router = Router();

router.route('/').post(validateCoachData, addCoach).get(getCoachesByTeam);
router.route('/:id').put(updateCoach).get(getCoach).delete(deleteCoach);

export default router;