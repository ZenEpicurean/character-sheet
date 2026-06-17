import Profile from './Profile.js';

export default class Blacksmithing extends Profile {
    constructor() {
        const catalog = {
            sword: {
                id: 'sword',
                name: 'Iron Sword',
                description: 'A standard iron sword',
                requiredLevel: 1,
                materials: ['iron ore', 'coal']
            },
            shield: {
                id: 'shield',
                name: 'Iron Shield',
                description: 'A protective iron shield',
                requiredLevel: 3,
                materials: ['iron ore', 'wood']
            },
            axe: {
                id: 'axe',
                name: 'Battle Axe',
                description: 'A heavy two-handed axe',
                requiredLevel: 5,
                materials: ['iron ore', 'steel', 'wood']
            },
            hammer: {
                id: 'hammer',
                name: 'War Hammer',
                description: 'A powerful war hammer',
                requiredLevel: 5,
                materials: ['iron ore', 'steel']
            }
        };

        super('Blacksmithing', catalog);
    }
}
