import Battle from "./src/interfaces/battle";
import container from "./src/config/ioc_config";
import { inject, named, injectable } from 'inversify';
import SERVICE_IDENTIFIER from "./src/constants/identifiers";
import TAG from "./src/constants/tags";
import { LeatherBoots } from "./src/entities";

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Composition root
let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);
// let armory = container.get<Armory>(SERVICE_IDENTIFIER.ARMORY);

// armory.getLeather();


// /armory/leather

// /armory/steel


// console.log(epicBattle.fight());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/fight', (req: Request, res: Response) => {
  res.send(epicBattle.fight());
});

app.get('/armory/leather', (req: Request, res: Response) => {
  res.send(epicBattle.getLeatherArmor());
});

app.get('/armory/steel', (req: Request, res: Response) => {
  res.send(epicBattle.getSteelArmor());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});