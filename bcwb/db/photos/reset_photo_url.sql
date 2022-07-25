-- THIH RESETS COVER IMAGE IF NOT FOUND --
UPDATE recipe
SET cover_image_url = NULL WHERE cover_image_url = $1