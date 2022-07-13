UPDATE recipe
SET title = $1, description = $2, pinterest_url = $3, category = $4, published = $5, cover_image_url = $6 WHERE recipe_id = $7
RETURNING *;