var Product = require('../model/Product');

async function getAllProducts(req, res) {
    var products = await Product.findAll();
    res.json(products
    )
}

async function getOne(req, res) {
    var { id } = req.params;

    var product = await Product.findOne({
        where: {
            id
        }
    });
    res.json(product);
}

async function createProduct(req, res) {
    var { tenant_id, name, description, list_price } = req.body;
    try {
        var newProduct = await Product.create({
            tenant_id, name, description, list_price
        }, {
            fields: ['tenant_id', 'name', 'description', 'list_price']
        }
        );
        if (newProduct) {
            res.json({
                message: "Producto Creado",
                data: newProduct
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creando Producto",
            data: {}
        })
    }
}

async function deleteProduct(req, res) {
    var { id } = req.params;
    var rowCount = await Product.destroy({
        where: {
            id
        }
    })
    res.json({
        message: 'Producto eliminado',
        count: rowCount
    });
}

async function updateProduct(req, res) {
    var { id } = req.params;
    var { tenant_id, name, description, list_price } = req.body;
    var product = await Product.findOne({
        where: {
            id
        }
    });
    product.update({
        tenant_id, name, description, list_price
    });
    res.json({
        message: 'Producto Actualizado',
        data: product
    });
}

module.exports = { createProduct, getAllProducts, getOne, deleteProduct, updateProduct };