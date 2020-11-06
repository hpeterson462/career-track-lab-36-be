const pool = require("../utils/pool");

module.exports = class Recipe {
  id;
  name;
  ingredients;
  directions;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.ingredients = row.ingredients;
    this.directions = row.directions;
  }

  static async insert(recipe) {
    const { rows } = await pool.query(
      `INSERT INTO recipes (name, ingredients, directions) 
      VALUES ($1, $2, $3)
      RETURNING *`,
      [recipe.name, recipe.ingredients, recipe.directions]
    );

    return new Recipe(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(
      `SELECT * FROM recipes`);

    return rows.map(row => new Recipe(row));
  }

  static async findByName(name) {
    const { rows } = await pool.query(
      `SELECT * FROM recipes WHERE name=$1`,
      [name]
    );

    if (!rows[0]) return null;
    return new Recipe(rows[0]);
  }

  static async update(id, updatedRecipe) {
    const { rows } = await pool.query(
      `UPDATE recipes
      SET  name = $1, ingredients =$2, directions = $3
      WHERE id = $4
      RETURNING *`,
      [updatedRecipe.name, updatedRecipe.ingredients, updatedRecipe.directions, id]
    );

    return new Recipe(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM recipes 
      WHERE id=$1 RETURNING *`, [id]
    );

    if (!rows[0]) return null;
    return new Recipe(row[0])
  }
};
