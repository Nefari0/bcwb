INSERT INTO recipe (title,description,pinterest_url,category,published,servings,hours,author,cover_image_url,date_created,minutes)
VALUES (
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
)
RETURNING *;