import { DataTypes, Model } from "sequelize";
export default class Task extends Model {
    static initialize(sequelize) {
        Task.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                nameTask: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                dateReg: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                    allowNull: false,
                },
                dateComplete: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Task',
                tableName: 'task',
                paranoid: false,
            }
        );
    }
}

