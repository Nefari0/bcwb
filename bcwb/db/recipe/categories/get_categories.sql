SELECT bp.x, bp.y, bp.z, c.photo_url, c.category, c.category_id
FROM bcwb_photos bp
JOIN categories c ON bp.url = c.photo_url