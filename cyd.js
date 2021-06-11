import cydItemSheet from "./sheets/cyditemsheet.js";

hooks.once("init", () => {
    console.log("cyd | Initialisation du systéme Choose Your Dice pour Wasteland");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("cyd", cydItemSheet, { makeDefault: true});
});
