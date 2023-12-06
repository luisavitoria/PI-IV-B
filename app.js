import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes.js";
import { config } from "./config/config.js";
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(config.app.port, () => {
    console.log("server running on port " + config.app.port);
})

//https://sage.saude.gov.br/paineis/ubsFuncionamento/lista.php?output=html&ufcidade=AL&codPainel=&ufs=27