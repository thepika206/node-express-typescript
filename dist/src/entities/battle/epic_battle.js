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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpicBattle = void 0;
const inversify_1 = require("inversify");
const identifiers_1 = __importDefault(require("../../constants/identifiers"));
const tags_1 = __importDefault(require("../../constants/tags"));
let EpicBattle = class EpicBattle {
    // @inject(SERVICE_IDENTIFIER.ARMORY) @named(TAG.LV2) public steelArmory: Armory;
    fight() {
        let desc = `FIGHT!
                ${this.warrior1.name} (wielding: ${this.warrior1.weapon.name}) (wearing: ${this.warrior1.helmet.name}, ${this.warrior1.pauldron.name}, ${this.warrior1.gauntlet.name}, ${this.warrior1.boots.name})
                vs
                ${this.warrior2.name} (wielding: ${this.warrior2.weapon.name}) (wearing: ${this.warrior2.helmet.name}, ${this.warrior2.pauldron.name}, ${this.warrior2.gauntlet.name}, ${this.warrior2.boots.name})`;
        return desc;
    }
    getLeatherArmor() {
        let desc = `
            ${this.leatherArmory.name} contents: \n
            ${this.leatherArmory.helmet.name}, \n
            ${this.leatherArmory.pauldron.name}, \n
            ${this.leatherArmory.gauntlet.name}, \n
            ${this.leatherArmory.boots.name}, \n
        `;
        return desc;
    }
    getSteelArmor() {
        let desc = `
            Leather Armory contents: \n
            ${this.leatherArmory.helmet.name}, \n
            ${this.leatherArmory.pauldron.name}, \n
            ${this.leatherArmory.gauntlet.name}, \n
            ${this.leatherArmory.boots.name}, \n
        `;
        return desc;
    }
};
__decorate([
    (0, inversify_1.inject)(identifiers_1.default.WARRIOR),
    (0, inversify_1.named)(tags_1.default.LV1),
    __metadata("design:type", Object)
], EpicBattle.prototype, "warrior1", void 0);
__decorate([
    (0, inversify_1.inject)(identifiers_1.default.WARRIOR),
    (0, inversify_1.named)(tags_1.default.LV2),
    __metadata("design:type", Object)
], EpicBattle.prototype, "warrior2", void 0);
__decorate([
    (0, inversify_1.inject)(identifiers_1.default.WARRIOR),
    (0, inversify_1.named)(tags_1.default.LV2),
    __metadata("design:type", Object)
], EpicBattle.prototype, "steelArmory", void 0);
__decorate([
    (0, inversify_1.inject)(identifiers_1.default.ARMORY),
    (0, inversify_1.named)(tags_1.default.LV1),
    __metadata("design:type", Object)
], EpicBattle.prototype, "leatherArmory", void 0);
EpicBattle = __decorate([
    (0, inversify_1.injectable)()
], EpicBattle);
exports.EpicBattle = EpicBattle;
