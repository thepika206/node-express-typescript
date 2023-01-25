import { Boots } from "./boots";
import { Gauntlet } from "./gauntlet";
import { Helmet } from "./helmet";
import { Pauldron } from "./pauldron";



export interface Armory {
    name: string;   
    pauldron: Pauldron;
    helmet: Helmet;
    gauntlet: Gauntlet;
    boots: Boots;
    getArmor(): string;

}

