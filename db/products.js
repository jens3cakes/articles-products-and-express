let allProducts = [
  {
    name: 'bottle',
    brand: 'Glass',
    price: 2.00,
    type: 'glass',
    description: 'blue glass vase',
    id: 1
  }
];
let nextId = 2;

// function getId(prod) {
//   let count = 0
//   if (prod) {
//     count++;
//   }
//   return count;
// }

function makeNewProduct(req, res) {
  let productName = req.body.productName;
  let productBrand = req.body.productBrand;
  let productPrice = req.body.productPrice;
  let productType = req.body.productType;
  let productDesc = req.body.productDescription;

  let product = {
    name: productName,
    brand: productBrand,
    price: productPrice,
    type: productType,
    description: productDesc,
    id: nextId++
  }
  allProducts.push(product)
  console.log(allProducts)
  return product;
}

const allProductsObj = { allProducts };

function getProductById(id) {
  let productFetched = allProducts.filter((product) => {
    return parseInt(id) === product.id
  })[0];
  
  return productFetched
};

// if (id) {
//   allProducts.filter(() => {
//     id === product.id
//     return product;
//   })
// } else {
//   return '404, item not found'
// }
console.log(getProductById(0))


module.exports = {
  makeNewProduct: makeNewProduct,
  allProducts: allProducts,
  allProductsObj: allProductsObj,
  getProductById: getProductById
}
