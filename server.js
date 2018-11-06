require('dotenv').config();
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const fs = require('fs');
const bodyParser = require('body-parser');
const productRouter = require('./routes/products.js')
//const articleRouter = require('./routes/articles.js')
const PORT = process.env.EXPRESS_CONTAINER_PORT;


app.engine('.hbs', exphbs({
  defaultLayout:'main',
  extname: '.hbs'
}));
app.set('view engine','.hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', productRouter);
//app.use('/articles', articleRouter);
app.use(express.static('public'));

app.get('/', (req, res) => {
res.redirect('/products');
});

// app.get('/', (req, res)=>{
//   res.redirect('articles/index');
// })

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
});