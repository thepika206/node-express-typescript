"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteelArmory = exports.LeatherArmory = exports.SteelPauldron = exports.LeatherPauldron = exports.SteelHelmet = exports.LeatherHelmet = exports.SteelGauntlet = exports.LeatherGauntlet = exports.SteelBoots = exports.LeatherBoots = exports.Shuriken = exports.Katana = exports.Samurai = exports.Ninja = exports.EpicBattle = void 0;
var epic_battle_1 = require("./battle/epic_battle");
Object.defineProperty(exports, "EpicBattle", { enumerable: true, get: function () { return epic_battle_1.EpicBattle; } });
var warriors_1 = require("./warriors");
Object.defineProperty(exports, "Ninja", { enumerable: true, get: function () { return warriors_1.Ninja; } });
Object.defineProperty(exports, "Samurai", { enumerable: true, get: function () { return warriors_1.Samurai; } });
var weapons_1 = require("./weapons");
Object.defineProperty(exports, "Katana", { enumerable: true, get: function () { return weapons_1.Katana; } });
Object.defineProperty(exports, "Shuriken", { enumerable: true, get: function () { return weapons_1.Shuriken; } });
var boots_1 = require("./armor/boots");
Object.defineProperty(exports, "LeatherBoots", { enumerable: true, get: function () { return boots_1.LeatherBoots; } });
Object.defineProperty(exports, "SteelBoots", { enumerable: true, get: function () { return boots_1.SteelBoots; } });
var gauntlet_1 = require("./armor/gauntlet");
Object.defineProperty(exports, "LeatherGauntlet", { enumerable: true, get: function () { return gauntlet_1.LeatherGauntlet; } });
Object.defineProperty(exports, "SteelGauntlet", { enumerable: true, get: function () { return gauntlet_1.SteelGauntlet; } });
var helmet_1 = require("./armor/helmet");
Object.defineProperty(exports, "LeatherHelmet", { enumerable: true, get: function () { return helmet_1.LeatherHelmet; } });
Object.defineProperty(exports, "SteelHelmet", { enumerable: true, get: function () { return helmet_1.SteelHelmet; } });
var pauldron_1 = require("./armor/pauldron");
Object.defineProperty(exports, "LeatherPauldron", { enumerable: true, get: function () { return pauldron_1.LeatherPauldron; } });
Object.defineProperty(exports, "SteelPauldron", { enumerable: true, get: function () { return pauldron_1.SteelPauldron; } });
var leather_armory_1 = require("./armory/leather_armory");
Object.defineProperty(exports, "LeatherArmory", { enumerable: true, get: function () { return leather_armory_1.LeatherArmory; } });
var steel_armory_1 = require("./armory/steel_armory");
Object.defineProperty(exports, "SteelArmory", { enumerable: true, get: function () { return steel_armory_1.SteelArmory; } });
