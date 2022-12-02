import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import routesHandler from './middlewares/routesHandler.js';
import initApp from './helpers/init-app.js';
import notFound from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// config
app.set('port', process.env.PORT || 3000);
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// middlewares
app.use(express.json());
app.use(cors());

// routes
routesHandler(app);

// Erros handler
app.use(errorHandler);

// Not found handler
app.use(notFound);

// initapp
initApp(app);
