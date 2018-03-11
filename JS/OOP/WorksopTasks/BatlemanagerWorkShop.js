//battleManager task
function solve() {
    'use strict';

    const ERROR_MESSAGES = {
        INVALID_NAME_TYPE: 'Name must be string!',
        INVALID_NAME_LENGTH: 'Name must be between between 2 and 20 symbols long!',
        INVALID_NAME_SYMBOLS: 'Name can contain only latin symbols and whitespaces!',
        INVALID_MANA: 'Mana must be a positive integer number!',
        INVALID_EFFECT: 'Effect must be a function with 1 parameter!',
        INVALID_DAMAGE: 'Damage must be a positive number that is at most 100!',
        INVALID_HEALTH: 'Health must be a positive number that is at most 200!',
        INVALID_SPEED: 'Speed must be a positive number that is at most 100!',
        INVALID_COUNT: 'Count must be a positive integer number!',
        INVALID_SPELL_OBJECT: 'Passed objects must be Spell-like objects!',
        NOT_ENOUGH_MANA: 'Not enough mana!',
        TARGET_NOT_FOUND: 'Target not found!',
        INVALID_BATTLE_PARTICIPANT: 'Battle participants must be ArmyUnit-like!'
    };
    const Validator = {

        isString(x) { //this way of function syntaxis i svalid only for ES6
            if (typeof x !== 'string') {
                throw Error(ERROR_MESSAGES.INVALID_NAME_TYPE);
            }
        },
        isInRange(x, min, max, err) {
            if (x < min || x > max || Number.isNaN(x)) {
                throw Error(err);
            }
        },
        isLengthInRange2_20(x) {
            this.isInRange(x.length, 2, 20, ERROR_MESSAGES.INVALID_MANA);

        },
        isConsistedOfValidSymbols(x) {
            if (x.match(/[^\w]/)) {
                throw Error(ERROR_MESSAGES.INVALID_NAME_SYMBOLS);
            }
        },
        isPositiveMana(x) {
            if (typeof x !== 'number' || x <= 0 || Number.isNaN(x)) {
                throw Error(ERROR_MESSAGES.INVALID_NAME_SYMBOLS);
            }
        },
        isValideffect(x) {
            if (typeof x !== 'finction' || x.length !== 1) { // with length we chack weather we have exactly one argument
                throw Error(ERROR_MESSAGES.INVALID_EFFECT);
            }
        },
        isValidAlignemt(x) {
            if (x !== 'good' && x !== 'neutral' && x !== 'evil') {
                throw Error('Ailgnment must be good, neutral or evil!');
            }
        },
        isValidDamage(x) {
            this.isInRange(x, 0, 100, ERROR_MESSAGES.INVALID_DAMAGE);
        },
        isValidHealth(x) {
            this.isInRange(x, 0, 200, ERROR_MESSAGES.INVALID_HEALTH);
        },
        isValidCout(x) {
            if ((typeof x !== 'number') || (x < 0) || ((x | 0) !== x) || Number.isNaN(x)) { //(x|0)===x check is x is INTEGR
                //bitwise operations are valid ONLY on INTEGERs
                throw Error(ERROR_MESSAGES.INVALID_COUNT);
            }
        },
        isValidSpeed(x) {
            this.isInRange(x, 0, 100, ERROR_MESSAGES.INVALID_SPEED);
        }
    };

    const getNextID = (function() { // there are better options in ES6
        let counter = 0;
        return function() {
            couter += 1;
            return counter;
        };
    })(); //IFFE used increment counter of Unit ID and this couter not to be accessible from outside

    class Spell {
        constructor(name, manaCost, effect) {
            this.name = name;
            this.manaCost = manaCost;
            this.effect = effect;
        }
        get name() {
            return this._name;
        }
        set name(x) {
            Validator.isString(x);
            Validator.isLengthInRange2_20(x);
            Validator.isConsistedOfValidSymbols(x);
            this._name = x;
        }
        get manaCost() {
            return this._manaCost;
        }
        set manaCost(x) {
            Validator.isPositiveMana(x);
            this._manaCost = x;
        }
        get effect() {
            return this._effect;
        }
        set effect(x) {
            Validator.isValideffect(x);
            this._effect = x;
        }

    }
    class Unit {
        constructor(name, alignment) {
            this.name = name;
            this.alignment = alignment;
        }
        get name() {
            return this._name;
        }
        set name(x) {
            Validator.isString(x);
            Validator.isLengthInRange2_20(x);
            Validator.isConsistedOfValidSymbols(x);
            this._name = x;
        }
        get alignment() {
            return this._alignment;
        }
        set alignment(x) {
            Validator.isValidAlignemt(x)
            this._alignment = x;
        }
    }
    class ArmyUnit extends Unit {
        constructor(name, alignment, damage, health, count, speed) {
            super(name, alignment);
            this._id = getNextID();
            this.damage = damage;
            this.health = health;
            this.count = count;
            this.speed = speed;
        }
        get ig() {
            return this._id;
        }
        get damage() {
            return this._damage;
        }
        set damage(x) {
            Validator.isValidDamage(x)
            this._damage = x;
        }
        get health() {
            return this._health;
        }
        set health(x) {
            Validator.isValidHealth(x)
            this._health = x;
        }
        get count() {
            return this._count;
        }
        set count(x) {
            Validator.isValidCout(x)
            this._count = x;
        }
        get speed() {
            return this._speed;
        }
        set speed(x) {
            Validator.isValidSpeed(x)
            this._speed = x;
        }
    }
    class Commander extends Unit {
        constructor(name, alignment, mana) {
            super(name, alignment);
            this.mana = mana;
            this.spellbook = [];
            this.army = [];
        }
        get mana() {
            return this._mana;
        }
        set mana(x) {
                Validator.isPositiveMana(x)
                this._mana = x;
            }
            //     get spellbook() {     // set and get will not be needed as it tirned put only array is needed
            //         return this._spellbook;
            //     }
            //     set spellbook(x) {
            //         this._spellbook = x;
            //     }
            //     get army() {
            //         return this._army;
            //     }
            //     set army(x) {
            //         this._army = x;
            //     }
    }

    Array.prototype.filterByProperty = function(query, propName) { // to filter by given property and/or properties
        if (!query.hasOwnProperty(propName)) {
            return this;
        }
        const value = query[propName];
        return this.filter(x => x[propName] === value);
    };
    const battlemanagerData = {
        commanders: [], //array that will be filled with Commanders
        armyUnitsObj: {},
        armyUnits: []
    };
    const battlemanager = {
        getCommander: function(name, alignment, mana) { // in ES 6 : function can be omitted
            return new Commander(name, alignment, mana)
        },
        getArmyUnit: function(options) {
            const { name, alignment, damage, health, count, speed } = options;
            //Upper is ES6 syntaxis of destructoring assignments
            // const name = options.name, const alignment = options.alignment etc.
            const unit = new ArmyUnit(name, alignment, damage, health, count, speed);
            battlemanagerData.armyUnitsObj[unit.id] = unit;
            battlemanagerData.armyUnits.push(unit);
            return unit;
        },
        getSpell: function(name, manaCost, effect) {
            return new Spell(name, manaCost, effect);
        },
        addCommanders: function(...commanders /* equivalent ES6 commander1, commander2, commander3*/ ) {
            battlemanagerData.commanders.push(...commanders);
            return this;
        },
        addArmyUnitTo: function(commanderName, armyUnit) {
            //N.B!:To chck if commander returns undefined 
            //or two names are met more than once
            battlemanagerData
                .commanders
                .find(c => c.name === commanderName)
                .army.push(armyUnit);
            return this;
        },
        addSpellsTo: function(commanderName, ...spells /*spell1, spell2, spell3*/ ) {
            try {
                battlemanagerData
                    .commanders
                    .find(c => c.name === commanderName)
                    .spellbook.push(...(spells.map(s => new Spell(s.name, s.manaCost, s.effect))));
            } catch (e) {
                throw Error(ERROR_MESSAGES.INVALID_SPELL_OBJECT);
            }
            return this;
        },
        findCommanders: function(query) {
            return battlemanagerData.commanders
                .slice() // to have a copy of the array
                .filterByProperty(query, 'name')
                .filterByProperty(query, 'alignment')
                .sort(x => x.name); //OR .sort((x,y)=>x.name.localeCompare(y.name));
        },
        findArmyUnitById: function(id) {
            // let unit;  // but we can store all armyUnits in array/asociative array in battlemanagerData
            // for (const c of battlemanagerData.commanders) {
            //     const result = c.army.find(u => u.id);
            //     if (typeof result !== 'undefied') {
            //         unit = result;
            //         break;
            //     }
            // }
            return battlemanagerData.armyUnitsObj[id];
        },
        findArmyUnits: function(query) {
            return battlemanagerData.armyUnits
                .slice()
                .filterByProperty(query, 'id')
                .filterByProperty(query, 'name')
                .filterByProperty(query, 'alignment')
                .sort((x, y) => {
                    const cmp = y.speed - x.speed;
                    if (cmp === 0) {
                        return x.name.localeCompare(y.name);
                    }
                    return cmp;
                });
        },
        spellcast: function(casterName, spellName, targetUnitId) {
            const unit = this.findArmyUnitById(targetUnitId);
            if (typeof unit === 'undefined') {
                throw Error(ERROR_MESSAGES.TARGET_NOT_FOUND);
            }
            const commander = battlemanagerData.commanders
                .find(c => c.name = casterName);
            if (typeof commander === 'undefined') {
                throw Error(`Can't cast with non existing commander ${comanderName}!`)
            }
            const spell = commander.spellbook
                .find(s => s.name == spellName);
            if (typeof spell === 'undefined') {
                throw Error(`${comanderName} does not know ${spellName}`)
            }
            if (commander.mana < spell.mana) {
                throw Error(ERROR_MESSAGES.NOT_ENOUGH_MANA);
            }
            commander.mana -= spell.manaCost;
            spell.effect(unit);
            return this;
        },
        battle: (function() {
            const properties = 'name, alignment, damage, health, count, speed'.split(', ');
            return function(attacker, defender) {
                [attacker, defender]
                .forEach(unit => properties.forEach(p => {
                    if (typeof unit[p] === 'undefined') {
                        throw Error(ERROR_MESSAGES.INVALID_BATTLE_PARTICIPANT);
                    }
                }));
                const totalDamage = attacker.damage * attacker.count;
                const totalHealth = defender.health * defender.count;
                const newCount = Math.ceil((totalHealth - totalDamage) / defender.health);
                if (newCount < 0) {
                    defender.count = 0;
                } else {
                    defender.count = newCount;
                }
                return this;
            };
        })()
    };
    return battlemanager;
}
module.exports = solve;