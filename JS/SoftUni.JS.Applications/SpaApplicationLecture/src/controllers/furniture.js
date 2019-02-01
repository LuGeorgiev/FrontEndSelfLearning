const furnitureModel = require('../models/furnitureModel');
module.exports = (function() {
    const getCreate = function(ctx) {
        ctx.partial('views/furniture/furniture.hbs');
    };

    const postCreate = function(ctx) {
        furnitureModel.create(ctx.params);
    };

    return {
        getCreate,
        postCreate
    }
}());