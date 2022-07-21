UPDATE recipe
SET title = $1, description = $2, pinterest_url = $3, category = $4, published = $5, cover_image_url = $6, servings = $7, prep_time = $8, author = $9 WHERE recipe_id = $10
RETURNING *;