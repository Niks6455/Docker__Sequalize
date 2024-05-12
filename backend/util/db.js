import { sequelize } from '../models/index.js';
import Task from "../models/task.js";

async function initializeDbModels() {
    Task.initialize(sequelize);
    await Task.sync({ alter: true });
    console.log('models initialized');
}

export default {
    initializeDbModels
};
