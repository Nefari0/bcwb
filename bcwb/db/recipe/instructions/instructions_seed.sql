CREATE TABLE instruction (
    instruction_id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
    step INTEGER,
    content TEXT
)

