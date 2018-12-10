/*jshint esversion:6*/
let assert = require("chai").assert;

function makeCard() {
    return {
        suit: "K",
        face: "2",
        toString: function() {}
    };
}

describe("makeCard()", function() {
    it("Should make new card object", function() {
        const input = [1, 2];

        const result = makeCard();

        //Assert
        assert.isObject(result);
        assert.isDefined(result.toString);
        assert.isFunction(result.toString);
        assert.isDefined(result.face);
        assert.isDefined(result.suit);
        assert.isString(result.suit);
        assert.isString(result.face);
    });
});

describe("makeCard.toString", function() {
    it("should return string representation", function() {
        const input = [1, 2];

        const result = makeCard();

        //Assert
        assert.isObject(result);
        assert.isDefined(result.toString);
        assert.isFunction(result.toString);
        assert.isDefined(result.face);
        assert.isDefined(result.suit);
        assert.isString(result.suit);
        assert.isString(result.face);
    });
});