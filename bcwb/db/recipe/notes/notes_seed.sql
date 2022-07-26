
CREATE TABLE notes (
    note_id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
    note_body TEXT
)

INSERT INTO notes (recipe_id,note_body)
VALUES (
  59,
  'This is the first note for BCC'
)