const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(200).json({
        name:'Aykut',
        surname:'Elevli',
        phone:'1234567',
        adress:'Tirebolu/Giresun',
    });
});

module.exports = app;