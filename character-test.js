import { CharacterSheet} from "./Models/CharacterSheet.js";

const character = new CharacterSheet();
character.strength = 15;
character.dexterity = 10;
character.constitution = 7;
character.intelligence = 5;
character.wisdom = 3;
character.charisma = 1;

character.currencySilver = 100;
character.currencyGold = 50;
character.currencyCopper = 20;

console.log(character.getCurrencies());