const productApi = require('../api/product');
const orderApi = require('../api/order');

module.exports = {
    placeGet: async(req, res) => {
        const id = req.params.id;
        const product = await productApi.getById(id);

        res.render('order/place', product);
    },
    placePost: async(req, res) => {
        //res.json(req.body);
        const data = req.body;
        data.creator = req.user._id;
        try {
            await orderApi.create(data);
            return res.redirect('/');

        } catch (err) {
            console.log(err);
            return res.render('order/place', { error: err.message });
        }


    },
    status: async(req, res) => {
        const orders = await orderApi.getByUserId(req.user._id);
        orders.map(o => {
                o.productName = o.product.category
            })
            //res.json(orders);
        res.render('order/status', { orders });
    },
    details: async(req, res) => {
        res.render('order/details')
    }
}