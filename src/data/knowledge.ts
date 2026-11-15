
import type { KnowledgePost } from "./knowledge.types";

// COMPUTER SCIENCE
import { howCpusExecuteInstructions } from "./knowledge/computing/how-cpus-execute-instructions";

// ELECTRONICS
import { understandingI2c } from "./knowledge/electronics/understanding-i2c";

// ASTRONOMY
import { whatHappensInsideAStar } from "./knowledge/astronomy/what-happens-inside-a-star";
import { iapetus } from "./knowledge/astronomy/iapetus";
import { venusDayLongerThanYear } from "./knowledge/astronomy/venus-day-longer-than-year";
import { pulsars } from "./knowledge/astronomy/pulsars";
import { roguePlanets } from "./knowledge/astronomy/rogue-planets";
import { neptuneDiamondRain } from "./knowledge/astronomy/neptune-diamond-rain";
import { moonMovingAway } from "./knowledge/astronomy/moon-moving-away";
import { magnetars } from "./knowledge/astronomy/magnetars";

// PALEONTOLOGY
import { opabinia } from "./knowledge/paleontology/opabinia";
import { tullyMonster } from "./knowledge/paleontology/tully-monster";
import { sharksOlderThanTrees } from "./knowledge/paleontology/sharks-older-than-trees";
import { dinosaurFeathers } from "./knowledge/paleontology/dinosaur-feathers";
import { hallucigenia } from "./knowledge/paleontology/hallucigenia";
import { whaleEvolution } from "./knowledge/paleontology/whale-evolution";
import { giantCarboniferousInsects } from "./knowledge/paleontology/giant-carboniferous-insects";
import { coelacanth } from "./knowledge/paleontology/coelacanth";

// BIOLOGY
import { antarcticIcefish } from "./knowledge/biology/antarctic-icefish";
import { octopusThreeHearts } from "./knowledge/biology/octopus-three-hearts";
import { axolotlRegeneration } from "./knowledge/biology/axolotl-regeneration";

// EARTH SCIENCE
import { bloodFalls } from "./knowledge/earth-science/blood-falls";
import { naturalNuclearReactor } from "./knowledge/earth-science/natural-nuclear-reactor";
import { snowballEarth } from "./knowledge/earth-science/snowball-earth";

// EXPORT TYPES
export type {
  KnowledgeLanguage,
  KnowledgeCategory,
  KnowledgeText,
  KnowledgeImage,
  KnowledgeReference,
  KnowledgeSection,
  KnowledgePost,
} from "./knowledge.types";

// ALL ARTICLES
export const knowledgePosts: KnowledgePost[] = [
  howCpusExecuteInstructions,
  understandingI2c,
  whatHappensInsideAStar,

  iapetus,
  venusDayLongerThanYear,
  pulsars,
  roguePlanets,
  neptuneDiamondRain,
  moonMovingAway,
  magnetars,

  opabinia,
  tullyMonster,
  sharksOlderThanTrees,
  dinosaurFeathers,
  hallucigenia,
  whaleEvolution,
  giantCarboniferousInsects,
  coelacanth,

  antarcticIcefish,
  octopusThreeHearts,
  axolotlRegeneration,

  bloodFalls,
  naturalNuclearReactor,
  snowballEarth,
];
