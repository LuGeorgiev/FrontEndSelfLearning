const productApi = require('../api/product');

module.exports = {
    index: async(req, res) => {
        const products = await productApi.getAll();

        return res.render('home/index', {
            products,
            admin: (req.user && req.user.role === 'Admin') //TODO role is array not a single role
        });
    }
}