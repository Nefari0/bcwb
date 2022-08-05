INSERT INTO categories(category,photo_url)
VALUES (
    $1,
    $2
)

RETURNING *;