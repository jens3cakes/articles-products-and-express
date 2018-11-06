const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db/knex');
// const db = require('../db/products')
const bodyParser = require('body-parser');



router.get('/', (req, res) => {
  db.raw('SELECT * FROM products')
  .then((products) => {
    console.log(products)
    res.json(products.rows)
  })
  .catch((err) => {
    console.error('err');
  });
});

router.post('/', (req, res)=>{
  const data = req.body;
  const productArray = [data.name, data.price, data.inventory]
  db.raw('INSERT INTO products (name, price, inventory) VALUES (?,?,?) RETURNING *', productArray)
  .then((newProd)=>{
    if(!newProd.rowCount){
      res.status(400).send('Failed to create new product')
    }
    res.json(newProd.row[0]);
  })
  .catch((err)=>{
    res.status(400).send('Something went worng!');
  });
});

module.exports = router;


// const dataMiddleware = (req, res) => {
//   console.log('data');
//   next();
// };
// router.post('/', (req, res) => {
//   let newProd = db.makeNewProduct(req, res)
//   res.redirect('/products');
// });

// router.get('/', (req, res) => {
//   res.render('products/index', db.allProductsObj)
// });

// router.get('/new', (req, res) => {
//   res.render('products/form');
// })

// router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   let fetchProduct = db.getProductById(id)
//   res.render('products/details', fetchProduct)
// })

// router.get('/:id/edit', (req, res) => {

// })

// router.put('/:id/edit', (req, res) => {
//   let getId = req.params.id;
//   let fetchproduct = db.getProductById(id)
//   res.redirect('/products/:getId')

// })




