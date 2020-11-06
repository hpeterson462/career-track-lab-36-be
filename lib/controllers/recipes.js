const { Router } = require('express');
const Recipe = require('../models/recipe');

module.exports = Router()
  .post('/', (res, req, next) => {
    Recipe
      .insert(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Recipe
      .findAllRecipes(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Recipe
      .findRecipeById(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Recipe
      .updateRecipeById(req.params.id, req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .delete(':/id', (req, res, next) => {
    Recipe
      .delete(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  });
