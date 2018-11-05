const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const fs = require('fs');
const bodyParser = require('body-parser');
const productRouter = require('./routes/products.js')
const PORT = process.env.PORT || 8080;

app.engine('.hbs', exphbs({
  defaultLayout:'main',
  extname: '.hbs'
}));
app.set('view engine','.hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', productRouter);
app.use(express.static('public'));


app.get('/', (req, res) => {
//res.send('Server connected')
res.render('products/index');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
});