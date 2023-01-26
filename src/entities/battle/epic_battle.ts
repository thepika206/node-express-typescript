import { inject, injectable, named } from "inversify";

import { Armory, Battle, Warrior } from "../../interfaces";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import TAG from "../../constants/tags";

@injectable()
export class EpicBattle implements Battle {

    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.LV1) public warrior1: Warrior;
    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.LV2) public warrior2: Warrior;
    @inject(SERVICE_IDENTIFIER.ARMORY) @named(TAG.LV1) public leatherArmory: Armory;
    @inject(SERVICE_IDENTIFIER.ARMORY) @named(TAG.LV2) public steelArmory: Armory;
    
    public fight() {
        let desc = `FIGHT!
                ${this.warrior1.name} (wielding: ${this.warrior1.weapon.name}) (wearing: ${this.warrior1.helmet.name}, ${this.warrior1.pauldron.name}, ${this.warrior1.gauntlet.name}, ${this.warrior1.boots.name})
                vs
                ${this.warrior2.name} (wielding: ${this.warrior2.weapon.name}) (wearing: ${this.warrior2.helmet.name}, ${this.warrior2.pauldron.name}, ${this.warrior2.gauntlet.name}, ${this.warrior2.boots.name})`;
        return desc;
    }

    public getLeatherArmor() {

        let desc = this.leatherArmory
        return desc
    }
    public getSteelArmor() {

        let desc = this.steelArmory
        return desc
    }

}
