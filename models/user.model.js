import { Datatypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const User = sequelize.define("User", {
    firstName: {
        type: Datatypes.String,
        allowNull: false,
    },
    lastName: {
        type: Datatypes.String,
    },
    uuid: {
        type: Datatypes.UUIDV4,
        primaryKey: true,
    },
});
