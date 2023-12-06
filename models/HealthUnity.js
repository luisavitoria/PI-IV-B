import sequelize from "../database/dataBase.js";
import {  DataTypes } from "sequelize";

const HealthUnity = sequelize.define("Unidade", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uf: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING
    },
    latitude: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.STRING
    },
    ibge: {
        type: DataTypes.STRING
    },
    cnes: {
        type: DataTypes.STRING
    },

})


export default HealthUnity;