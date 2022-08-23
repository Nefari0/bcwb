-- This udpates an existing row during the  "add new photo" query
UPDATE bcwb_photos
SET url = $1 WHERE photo_name = $2
RETURNING *;