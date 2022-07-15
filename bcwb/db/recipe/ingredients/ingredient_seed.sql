CREATE TABLE ingredient_items(
    ingredient_id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    FOREIGN key(recipe_id)REFERENCES recipe(recipe_id),
    content TEXT
)

INSERT INTO ingredient_items (recipe_id,step,content)
VALUES(
  24,
  2,
  'mix well'
)
