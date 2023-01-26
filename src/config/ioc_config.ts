import "reflect-metadata"
import { Container } from "inversify"
import { Armory, Battle, Boots, Gauntlet, Helmet, Pauldron, Warrior, Weapon} from "../interfaces"

import {
  EpicBattle,
  Katana,
  LeatherArmory,
  LeatherBoots,
  LeatherGauntlet,
  LeatherHelmet,
  LeatherPauldron,
  Ninja,
  Samurai,
  Shuriken,
  SteelArmory,
  SteelBoots,
  SteelGauntlet,
  SteelHelmet,
  SteelPauldron,
} from "../entities"

import SERVICE_IDENTIFIER from "../constants/identifiers"
import TAG from "../constants/tags"



let container = new Container()

//Armory
container.bind<Armory>(SERVICE_IDENTIFIER.ARMORY).to(LeatherArmory).whenTargetNamed(TAG.LV1)
container.bind<Armory>(SERVICE_IDENTIFIER.ARMORY).to(SteelArmory).whenTargetNamed(TAG.LV2)

//Warrior
container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.LV1)
container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.LV2)

//Weapon
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.LV1)
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.LV2)

//Helmet
container.bind<Helmet>(SERVICE_IDENTIFIER.HELMET).to(LeatherHelmet).whenParentNamed(TAG.LV1)
container.bind<Helmet>(SERVICE_IDENTIFIER.HELMET).to(SteelHelmet).whenParentNamed(TAG.LV2)

//Pauldron
container.bind<Pauldron>(SERVICE_IDENTIFIER.PAULDRON).to(LeatherPauldron).whenParentNamed(TAG.LV1)
container.bind<Pauldron>(SERVICE_IDENTIFIER.PAULDRON).to(SteelPauldron).whenParentNamed(TAG.LV2)

//Gauntlet
container.bind<Gauntlet>(SERVICE_IDENTIFIER.GAUNTLET).to(LeatherGauntlet).whenParentNamed(TAG.LV1)
container.bind<Gauntlet>(SERVICE_IDENTIFIER.GAUNTLET).to(SteelGauntlet).whenParentNamed(TAG.LV2)

//Boots
container.bind<Boots>(SERVICE_IDENTIFIER.BOOTS).to(LeatherBoots).whenParentNamed(TAG.LV1)
container.bind<Boots>(SERVICE_IDENTIFIER.BOOTS).to(SteelBoots).whenParentNamed(TAG.LV2)

//Battle
container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle)

export default container
