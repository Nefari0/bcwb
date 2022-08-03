CREATE TABLE categories(
  category_id SERIAL PRIMARY KEY,
  category TEXT,
  photo_url TEXT
)

INSERT INTO categories(category,photo_url)
VALUES(
  'Bread',
  'random_url.com'
)