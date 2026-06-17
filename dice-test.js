import {Dice} from "./Models/Dice.js";

const dice = new Dice();
dice.showYourWork = true;
dice.d20().subtract(10);
console.log(dice.rollHistory);
console.log(dice.value);
