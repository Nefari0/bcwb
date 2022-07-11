CREATE TABLE bcwb_photos (
  photo_id SERIAL PRIMARY KEY,
  url TEXT,
  title varchar(250),
  album varchar(250)
)

INSERT INTO bcwb_photos (url,title,album)
VALUES (
  'photo/url/',
  'first photo',
  'first album'
)