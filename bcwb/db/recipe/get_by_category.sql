SELECT * FROM recipe r
JOIN bcwb_photos bp ON r.cover_image_url = bp.url WHERE category = $1 AND published = true