const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});
//Veriyi güvenilir şekilde http ile gönderir.
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST request to /products'
    });
});
//Verii gönderirken güvenliği önemsemez.
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
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
