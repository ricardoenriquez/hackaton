var sequelize = require('../database/database');
var Sequelize = require('sequelize');

const Product = sequelize.define('ac_products', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    tenant_id: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    list_price: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false
});

module.exports = Product;