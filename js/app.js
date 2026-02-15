import { propertyConfig } from "../properties/property.config.js";
import { MapManager } from "./mapManager.js";
import { StepEngine } from "./stepEngine.js";
import { initModal } from "./modal.js";
import { initSplash } from "./splash.js";

const mapManager = new MapManager(propertyConfig.map);
const engine = new StepEngine(propertyConfig, mapManager);

initModal();
initSplash();

engine.goToTopic(0);
