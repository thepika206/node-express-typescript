"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteelArmory = void 0;
const inversify_1 = require("inversify");
const identifiers_1 = __importDefault(require("../../../constants/identifiers"));
let SteelArmory = class SteelArmory {
    constructor(pauldron, helmet, gauntlet, boots) {
        this.name = "Steel Armory";
        this.pauldron = pauldron;
        this.helmet = helmet;
        this.gauntlet = gauntlet;
        this.boots = boots;
    }
    getArmor() {
        let desc = `${this.name} contains:
            \n ${this.pauldron.name},
            \n ${this.helmet.name},
            \n ${this.boots.name},
            \n ${this.gauntlet.name}`;
        return desc;
    }
};
SteelArmory = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(identifiers_1.default.PAULDRON)),
    __param(1, (0, inversify_1.inject)(identifiers_1.default.HELMET)),
    __param(2, (0, inversify_1.inject)(identifiers_1.default.GAUNTLET)),
    __param(3, (0, inversify_1.inject)(identifiers_1.default.BOOTS)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], SteelArmory);
exports.SteelArmory = SteelArmory;
