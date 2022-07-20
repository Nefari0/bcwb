CREATE TABLE bcwb_photos (
  photo_id SERIAL PRIMARY KEY,
  url TEXT,
  title varchar(250),
  album varchar(250),
  style_left INTEGER,
  style_top INTEGER,
)

INSERT INTO bcwb_photos (url,title,album,style_left,style_top)
VALUES (
  'photo/url/',
  'first photo',
  'first album',
  2,
  1
)