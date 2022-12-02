import express from 'express';

import teamsRoutes from '../routes/teams.routes.js';
import playersRoutes from '../routes/players.routes.js';
import coachingRoutes from '../routes/coaching.routes.js';
import fifaInfo from '../routes/fifa-info.routes.js';

const routesHandler = (app) => {
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/fifa-teams', teamsRoutes);
    router.use('/fifa-players', playersRoutes);
    router.use('/fifa-coaching', coachingRoutes);
    router.use('/fifa-info', fifaInfo);
} 

export default routesHandler;