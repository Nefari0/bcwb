UPDATE recipe
SET title = $1, description = $2, pinterest_url = $3, category = $4, published = $5, cover_image_url = $6, servings = $7, hours = $8, author = $9, minutes = $10 WHERE recipe_id = $11
RETURNING *;