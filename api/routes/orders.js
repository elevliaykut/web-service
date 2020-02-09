const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Order = require('../models/order');
const Product = require('../models/product')

router.get('/', checkAuth, (req, res, next) => {
    Order.find()
        .select('product quantity _id') //ony get this properties
        .populate('product', 'name')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        _id: doc.id,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: 'GET',
                            url: 'https://localhost:3000/orders/' + doc._id,
                            description: 'See details to Order Id = ' + doc._id
                        }
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
router.post('/', checkAuth, (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                res.status(404).json({
                    message: 'Product Not Found',
                })
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
            });
            return order
                .save()
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Order was created',
                createdOrder: {
                    _id: result._id,
                    product: result.product,
                    quantity: result.quantity
                },
                request: {
                    type: 'POST',
                    url: 'https://localhost:3000/orders/' + result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Order Not Created',
                error: err
            })
        });
});
router.get('/:orderId', checkAuth, (req, res, next) => {
    Order.findById(req.params.orderId)
        .populate('product')
        .exec()
        .then(order => {
            if (!order) {
                res.status(404).json({
                    message: 'Order Not Found'
                });
            }
            res.status(200).json({
                order: order,
                request: {
                    type: 'GET',
                    url: 'https://localhost:3000/orders'
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
router.delete('/:orderId', checkAuth, (req, res, next) => {
    Order.remove({ _id: req.params.orderId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Order deleted",
                request: {
                    type: "POST",
                    url: 'https://localhost/orders',
                    body: { productId: "ID", quantity: "Number" }
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});
module.exports = router;
