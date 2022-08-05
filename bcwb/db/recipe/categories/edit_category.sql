UPDATE categories
SET category = $1, photo_url = $2 WHERE  category_id = $3

RETURNING *;