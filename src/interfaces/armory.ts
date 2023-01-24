import { Pauldron } from "./pauldron";



export interface Armory {
    name: string;   
    pauldron: Pauldron;
    getArmor(): string;

}

