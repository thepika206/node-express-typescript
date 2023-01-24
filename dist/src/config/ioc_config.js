"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const entities_1 = require("../entities");
const identifiers_1 = __importDefault(require("../constants/identifiers"));
const tags_1 = __importDefault(require("../constants/tags"));
let container = new inversify_1.Container();
//Binding for armory
container.bind(identifiers_1.default.ARMORY).to(entities_1.LeatherArmory);
container.bind(identifiers_1.default.PAULDRON).to(entities_1.LeatherPauldron).whenTargetNamed(tags_1.default.LV1);
//Bindings for warriors in battle
container.bind(identifiers_1.default.WARRIOR).to(entities_1.Ninja).whenTargetNamed(tags_1.default.LV1);
container.bind(identifiers_1.default.WARRIOR).to(entities_1.Samurai).whenTargetNamed(tags_1.default.LV2);
container.bind(identifiers_1.default.WEAPON).to(entities_1.Shuriken).whenParentNamed(tags_1.default.LV1);
container.bind(identifiers_1.default.WEAPON).to(entities_1.Katana).whenParentNamed(tags_1.default.LV2);
container.bind(identifiers_1.default.HELMET).to(entities_1.LeatherHelmet).whenParentNamed(tags_1.default.LV1);
container.bind(identifiers_1.default.HELMET).to(entities_1.SteelHelmet).whenParentNamed(tags_1.default.LV2);
container.bind(identifiers_1.default.PAULDRON).to(entities_1.LeatherPauldron).whenParentNamed(tags_1.default.LV1);
container.bind(identifiers_1.default.PAULDRON).to(entities_1.SteelPauldron).whenParentNamed(tags_1.default.LV2);
container.bind(identifiers_1.default.GAUNTLET).to(entities_1.LeatherGauntlet).whenParentNamed(tags_1.default.LV1);
container.bind(identifiers_1.default.GAUNTLET).to(entities_1.SteelGauntlet).whenParentNamed(tags_1.default.LV2);
container.bind(identifiers_1.default.BOOTS).to(entities_1.LeatherBoots).whenParentNamed(tags_1.default.LV1);
container.bind(identifiers_1.default.BOOTS).to(entities_1.SteelBoots).whenParentNamed(tags_1.default.LV2);
container.bind(identifiers_1.default.BATTLE).to(entities_1.EpicBattle);
exports.default = container;
