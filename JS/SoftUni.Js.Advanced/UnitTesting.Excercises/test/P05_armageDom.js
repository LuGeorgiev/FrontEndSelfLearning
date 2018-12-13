/*jshint esversion:6*/
let assert = require('chai').assert;
let jsdom = require('jsdom').jsdom;
let $ = require('jquery');

let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};

describe('Armagedom Unit Tests', function() {
    let oldHtml;
    let htmlSelector;
    beforeEach('Init the HTML', function() {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>`;
        htmlSelector = $('#target');
        oldHtml = htmlSelector.html();
    });

    it('should not remove with invalid selector', function() {
        let oldHtml = $(htmlSelector).html();

        nuke(htmlSelector, 5);
        //let result = htmlSelector.html();

        assert.equal(htmlSelector.html(), oldHtml);
    });

    it('should not remove with duplicate selector', function() {
        let selector1 = $(".nested");

        nuke(selector1, selector1);
        //let result = htmlSelector.html();

        assert.equal(htmlSelector.html(), oldHtml);
    });
});