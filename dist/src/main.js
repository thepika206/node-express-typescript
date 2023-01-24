"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_config_1 = __importDefault(require("./config/ioc_config"));
const identifiers_1 = __importDefault(require("./constants/identifiers"));
// New section ===========
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log("⚡️[server]: Server is running at http://localhost:${port}");
});
//=============
// Composition root
let epicBattle = ioc_config_1.default.get(identifiers_1.default.BATTLE);
console.log(epicBattle.fight());
