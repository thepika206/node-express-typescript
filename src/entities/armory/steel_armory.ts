import { inject, injectable } from "inversify"
import SERVICE_IDENTIFIER from "../../constants/identifiers"
import { Pauldron, Gauntlet, Helmet, Boots, Armory } from "../../interfaces"

@injectable()
export class SteelArmory implements Armory {
    public name: string
    public pauldron: Pauldron
    public gauntlet: Gauntlet
    public helmet: Helmet
    public boots: Boots

    public constructor(
        @inject(SERVICE_IDENTIFIER.PAULDRON) pauldron: Pauldron,
        @inject(SERVICE_IDENTIFIER.GAUNTLET) gauntlet: Gauntlet,
        @inject(SERVICE_IDENTIFIER.HELMET) helmet: Helmet,
        @inject(SERVICE_IDENTIFIER.BOOTS) boots: Boots,
    ){
        this.name = "Steel Armory"
        this.pauldron = pauldron
        this.gauntlet = gauntlet
        this.helmet = helmet
        this.boots = boots
    }
}