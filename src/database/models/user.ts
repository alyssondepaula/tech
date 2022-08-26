import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize/types";
import { sequelize } from "../connect";

const { DataTypes } = require('sequelize');

export interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    // Some fields are optional when calling UserModel.create() or UserModel.build()
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
  }

export const User = sequelize.define<User>('User', {
   id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});


console.log('COMO')