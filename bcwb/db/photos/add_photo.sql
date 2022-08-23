INSERT INTO bcwb_photos (url,photo_name,album,x,y,z)
VALUES ($1,$2,$3,$4,$5,$6)
RETURNING *;