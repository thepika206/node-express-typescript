import { inject, injectable, named } from "inversify";

import SERVICE_IDENTIFIER from "../../../constants/identifiers";
import { Armory, Pauldron } from "../../../interfaces";
import TAG from "../../../constants/tags";


@injectable()
export class LeatherArmory implements Armory {
    public name: string;
    public pauldron: Pauldron;

    
    public constructor(
        @inject(SERVICE_IDENTIFIER.PAULDRON) @named(TAG.LV1) pauldron: Pauldron

    ) {
        this.name = "Leather Armory";
        this.pauldron = pauldron;

    }

    public getArmor() {
        let desc = `list armor - class includes: ${this.pauldron.name}`;
        return desc;
    }

}
