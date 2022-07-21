INSERT INTO recipe (title,description,pinterest_url,category,published,servings,prep_time,author,cover_image_url)
VALUES (
    $1,$2,$3,$4,$5,$6,$7,$8,$9
)
RETURNING *;