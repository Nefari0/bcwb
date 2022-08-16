CREATE TABLE recipe (
    recipe_id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    pinterest_url: TEXT,
    published BOOLEAN,
    category TEXT,
    servings TEXT,
    hours INTEGER,
    minutes INTEGER,
    date_created: TEXT,
    author TEXT,
    cover_image_url TEXT
)

INSERT INTO recipe (title,description,pinterest_url)
VALUES (
    'First recipe',
    'This is the very first recipe published',
    'no pinterest yet'
)

-- Instructions --
CREATE TABLE instruction (
    recipe_id INTEGER,
    FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
    cover_image_url TEXT,
    step INTEGER,
    content TEXT
)

INSERT INTO instruction (recipe_id,step,content)
VALUES (
    1,
    1,
    'Add eggs'
)

-- Ingredient --
CREATE TABLE ingredient (
    recipe_id INTEGER,
    FOREIGN KEY(recipe_id) REFERENCES recipe(recipe_id),
    ingredient_id SERIAL PRIMARY KEY,
    item TEXT
)

INSERT INTO ingredient (recipe_id,item)
VALUES (
    1,
    '4 Large eggs'
)