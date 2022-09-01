SELECT * FROM recipe r
JOIN bcwb_photos bp ON r.cover_image_url = bp.url AND r.published = true
ORDER BY date_created DESC