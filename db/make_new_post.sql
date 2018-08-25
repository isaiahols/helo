insert into Posts
    (title, img, content, author_id)
values
    ($1, $2, $3, $4)
returning *;