INSERT INTO bcwb_photos (url,photo_name,album,x,y,z,angle)
VALUES ($1,$2,$3,$4,$5,$6,$7)
RETURNING *;