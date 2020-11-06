const { Router } = require('express');
const Recipe = require('../models/recipe');

module.exports = Router()
  .post('/', (res, req, next) => {
    Recipe
      .insert(req.body)
      .then(recipe => res.setEncoding(recipe))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Recipe
      .findAll()
      .then(recipes => res.send(recipes))
      .catch(next);
  })

  .get('/:name', (req, res, next) => {
    Recipe
      .findByName(name)
      .then(recipes => res.send(recipes))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Recipe
      .update(req.params.id, req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .delete(':/id', (req, res, next) => {
    Recipe
      .delete(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  });
