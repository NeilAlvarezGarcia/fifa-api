import { Router } from 'express';
import { 
    addPlayer, 
    getPlayer, 
    getPlayersByTeam, 
    updatePlayer,
    deletePlayer,
    validatePlayerData
} from '../controllers/players.controllers.js';

const router = Router();

router.route('/').post(validatePlayerData, addPlayer).get(getPlayersByTeam);
router.route('/:id').put(validatePlayerData, updatePlayer).get(getPlayer).delete(deletePlayer);

export default router;