const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});
//Veriyi güvenilir şekilde http ile gönderir.
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /products',
                createdProduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});
//Verii gönderirken güvenliği önemsemez.
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log("From Database", doc);
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({
                    message: 'No valid entry found for provided ID'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'ınvalid form data'
            });
        });
});
//Veriyi günceller.
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Update Product!'
    });
});
//Veriyi Siler.
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product!'
    });
});
module.exports = router;
