/*jshint esversion:6*/
function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function formatter(value) {
    return formatCurrency(1, 2, 3, value);
}
formatter(5);
//console.log("absdef".substr(-2, 2)); //LAst two



const human = (() => {
    const humanActions = {
        walk: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        run: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        climb: (speed, easing, direction, height) => {
            console.log(`${speed} ${easing} ${direction} ${height}`);
        }
    };

    const speed = 1;
    const easing = "InOut";

    const result = {};
    Object.keys(humanActions).forEach((key) => {
        result[key] = (direction) => {
            humanActions[key](speed, easing, direction);
        };
    });
    return result;
    // return {
    //     walk:(direction)=> obj.walk(speed, easing,direction),
    //     run: obj.run....
    // };
})();
human.run("Home");
human.climb('Up', 1000); // this way 4th param is undefined, arguments have to be iterated
//ANOTHER APPROACH. Best Practice
const athlete = (() => {
    const humanActions = {
        walk: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        run: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        climb: (speed, easing, direction, height) => {
            console.log(`${speed} ${easing} ${direction} ${height}`);
        }
    };

    const speed = 1;
    const easing = "InOut";

    const result = {};
    Object.keys(humanActions).forEach((key) => {
        result[key] = (direction) => {
            const arr = [speed, easing];
            for (let i = 0; i < arguments.length; i++) {
                arr.push(arguments[i]);
            }
            const actions = humanActions[key];
            actions.apply(null, arr); // null is because the context is not important
        };
    });
    return result;
    // return {
    //     walk:(direction)=> obj.walk(speed, easing,direction),
    //     run: obj.run
    // };
})();

//Approach with DESTRUCTION
const destructor = (() => {
    const humanActions = {
        walk: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        run: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        climb: (speed, easing, direction, height) => {
            console.log(`${speed} ${easing} ${direction} ${height}`);
        }
    };
    const speed = 1;
    const easing = "InOut";

    const result = {};
    Object.keys(humanActions).forEach((key) => {
        result[key] = (...args) => {
            humanActions[key].call(null, speed, easing, ...args);
        };
    });
    return result;

})();
destructor.walk("home");
destructor.climb('Everest', 8765);