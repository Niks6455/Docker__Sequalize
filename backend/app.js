import express from 'express';
import corsMiddleware from './middlewares/cors.js';
import dbUtils from './util/db.js';
import taskRoute from './routes/task.js';


const app = express();
const PORT = process.env.PORT || 3000;

(async function initDb() {
    try {
        await dbUtils.initializeDbModels();
    } catch (e) {
        console.log(e);
        console.log('COULD NOT CONNECT TO THE DB, retrying in 5 seconds');
        setTimeout(initDb, 5000);
    }
})();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(corsMiddleware);

app.use('/task', taskRoute);

app.listen(PORT, () => console.log(`Listen on :${PORT}`));
