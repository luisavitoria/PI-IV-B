import express from "express";
import * as HealthUnityController from "./controllers/HealthUnityController.js";

export const router = express.Router();

router.get("/vaccination-points", HealthUnityController.getAllHealthUnities)

router.get("/cities", HealthUnityController.getAllCities)

router.get("/vaccination-points/cities", HealthUnityController.getUnitiesByCity)


