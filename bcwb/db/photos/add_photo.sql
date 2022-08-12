INSERT INTO bcwb_photos (url,title,album,x,y,z)
VALUES ($1,$2,$3,$4,$5,$6)
RETURNING *;