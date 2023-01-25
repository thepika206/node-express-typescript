import { inject, injectable, named } from "inversify";

import SERVICE_IDENTIFIER from "../../../constants/identifiers";
import { Armory, Boots, Gauntlet, Helmet, Pauldron } from "../../../interfaces";
import TAG from "../../../constants/tags";


@injectable()
export class LeatherArmory implements Armory {
    public name: string;
    public pauldron: Pauldron;
    public helmet: Helmet;
    public gauntlet: Gauntlet;
    public boots: Boots;
    
    public constructor(
        @inject(SERVICE_IDENTIFIER.PAULDRON) @named(TAG.LV1) pauldron: Pauldron,
        @inject(SERVICE_IDENTIFIER.HELMET) @named(TAG.LV1) helmet: Helmet,
        @inject(SERVICE_IDENTIFIER.GAUNTLET) @named(TAG.LV1) gauntlet: Gauntlet,
        @inject(SERVICE_IDENTIFIER.BOOTS) @named(TAG.LV2) boots: Boots

    ) {
        this.name = "Leather Armory";
        this.pauldron = pauldron;
        this.helmet = helmet;
        this.gauntlet = gauntlet;
        this.boots = boots
    }

    public getArmor() {
        let desc =
            `${this.name} contains:
            \n ${this.pauldron.name},
            \n ${this.helmet.name},
            \n ${this.boots.name},
            \n ${this.gauntlet.name}`;
        return desc;
    }

}
