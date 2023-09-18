import { torgeternity } from "../../systems/torgeternity/module/config.js";

Hooks.once("init", async function () {
  torgeternity.cosmTypes.malagwa = "personnal.malagwa";
}
);