const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');

router.get('/', (req, res, next) => {
    Order.find()
        .select('product quantity _id') //ony get this properties
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
router.post('/', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Order was created',
                createdOrder:{
                    _id:result._id,
                    product:result.product,
                    quantity:result.quantity
                },
                request:{
                    type:'POST',
                    url:'https://localhost:3000/orders/' + result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message:'Order Not Created',
                error: err
            })
        });
});
router.get('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});
router.delete('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'Order deleted',
        orderId: req.params.orderId
    });
});
module.exports = router;
