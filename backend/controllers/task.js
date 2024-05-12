import Task from "../models/task.js";

export default {
    
    //создание новой задачи
    async createTask(req, res) {
        const { nameTask, dateComplete } = req.body;
        if (!nameTask || !dateComplete) {
            return res.status(400).json({ error: "Bad request" });
        }
        const task = await Task.create({ nameTask, dateComplete });
        res.json(task);
    },

    //получение задач
    async getTasks(req, res) {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            res.status(500).json({ error: 'Error fetching tasks' }); 
        }
    },

    //удаление задачи
    async deleteTask({ params: { id } }, res) {
        if (!id) {
            return res.status(400).json({ error: "Bad request" });
        }
        const task = await Task.destroy({ where: { id } });
        res.json("Задача удалена");
    },

    //изменение статуса задачи
    async changeStatus({ params: { id } }, res) {
        if (!id) {
            return res.status(400).json({ error: "Bad request" });
        }
        const task = await Task.findByPk(id);
        await task.update({ status: !task.status }, { where: { id } });
        res.json(task);
    },

};
