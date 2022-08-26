require('dotenv').config()

import { DataTypes, Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgresql://alysson:alysson@localhost:5432/balmee');
import './models/User';

