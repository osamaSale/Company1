const express = require('express');
const mainRouter = express.Router();

const {
  getAllArticles,
  createNewArticle,
  changeArticleTitleById,
  changeArticleAuthorById,
  deleteArticleById,
  deleteArticleByAuthor,
  login,
  signUp,
  getWeather,
  updateFavById,
  getAllArticleById
} = require('../controllers/main-controller');

mainRouter.get('/test', (req, res) => {
  res.json('Hello World Server');
});

mainRouter.get('/articles', getAllArticles);

mainRouter.post('/login', login);

mainRouter.post('/signUp', signUp);

mainRouter.post('/articles', createNewArticle);

mainRouter.put('/articles/:id/:newTitle', changeArticleTitleById);

mainRouter.put('/articles/:id', changeArticleAuthorById);

mainRouter.delete('/articles/:id', deleteArticleById);

mainRouter.delete('/articles/author', deleteArticleByAuthor);

mainRouter.get('/weather', getWeather);

mainRouter.post('/article', getAllArticleById);

mainRouter.post('/fav', updateFavById);

module.exports = mainRouter;