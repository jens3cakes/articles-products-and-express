const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db/articles')
const bodyParser = require('body-parser');
// const dataMiddleware = (req, res) => {
//   console.log('data');
//   next();
// };
router.post('/', (req, res) => {
  let newArticles = db.makeNewArticle(req, res)
  res.redirect('/articles');
});

router.get('/', (req, res) => {
  res.render('articles/index', db.allArticlesObj)
});

router.get('/new', (req, res) => {
  res.render('articles/form');
})

router.get('/:id', (req, res)=>{
  let id = req.params.id;
  let fetchProduct = db.getArticleById(id)
  res.render('articles/details',fetchArticle)
})
module.exports = router;