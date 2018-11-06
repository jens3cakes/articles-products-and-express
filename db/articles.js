let allArticles = [];
function makeNewArticle(req, res) {
  let articleTitle = req.body.title;
  let articleAuthor = req.body.author;
  let urlTitle = req.body.urlTitle;
  
  let articles = {
    title: articleTitle,
    author: articleAuthor,
    link: urlTitle,
  }
  
  allArticles.push(articles)
  console.log(articles)
  return articles;
}

const allArticlesObj = {allArticles};

function getArticleById(id) {
  let articleFetched = allArticles.filter((articles) => {
    return parseInt(id) === articles.id
  })[0];
  return articleFetched
};

// if (id) {
//   allProducts.filter(() => {
//     id === product.id
//     return product;
//   })
// } else {
//   return '404, item not found'
// }
console.log(getArticleById(0))





module.exports = {
makeNewArticle:makeNewArticle,
allArticlesObj:allArticlesObj,
allArticles:allArticles
}


