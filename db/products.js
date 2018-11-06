

function getProductById(id) {
if(id){
  return id.name;
}
};

function allProducts(){
  
  
}
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
        getProductById:getProductById,
        
      }
      
      // function makeNewProduct(req, res) {
        //   let productName = req.body.productName;
        //   let productBrand = req.body.productBrand;
        //   let productPrice = req.body.productPrice;
        //   let productType = req.body.productType;
        //   let productDesc = req.body.productDescription;
        
        //   let product = {
          //     name: productName,
          //     brand: productBrand,
          //     price: productPrice,
          //     type: productType,
          //     description: productDesc,
          //     id: nextId++
          //   }
          //   return product;
          // }
          // const allProductsObj = {};