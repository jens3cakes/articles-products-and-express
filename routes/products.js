const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db/products')
const bodyParser = require('body-parser');

// const dataMiddleware = (req, res) => {
//   console.log('data');
//   next();
// };
router.post('/', (req, res) => {
  let newProd = db.makeNewProduct(req, res)
  res.redirect('/products');
});

router.get('/', (req, res) => {
  res.render('products/index', db.allProductsObj)
});

router.get('/new', (req, res) => {
  res.render('products/form');
})

router.get('/:id', (req, res)=>{
  let id = req.params.id;
  let fetchProduct = db.getProductById(id)
  res.render('products/details',fetchProduct)
})
module.exports = router;



