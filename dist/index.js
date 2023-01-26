"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_config_1 = __importDefault(require("./src/config/ioc_config"));
const identifiers_1 = __importDefault(require("./src/constants/identifiers"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Composition root
let epicBattle = ioc_config_1.default.get(identifiers_1.default.BATTLE);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/fight', (req, res) => {
    res.send(epicBattle.fight());
});
app.get('/armory/leather', (req, res) => {
    res.send(epicBattle.getLeatherArmor());
});
app.get('/armory/steel', (req, res) => {
    res.send(epicBattle.getSteelArmor());
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
