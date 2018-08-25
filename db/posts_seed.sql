drop table if exists Posts;

create table Posts
(
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references Users(id)
);

select *
from Posts;

insert into Posts
(title, img, content,author_id)
values
('this','https://picsum.photos/200', 'lots of words', 1),
('this','https://picsum.photos/200', 'lots of words', 1),
('this','https://picsum.photos/200', 'lots of words', 1),
('this','https://picsum.photos/200', 'lots of words', 1),
('this','https://picsum.photos/200', 'lots of words', 1),
('this','https://picsum.photos/200', 'lots of words', 2),
('this','https://picsum.photos/200', 'lots of words', 2),
('this','https://picsum.photos/200', 'lots of words', 3),
('this','https://picsum.photos/200', 'lots of words', 4),
('this','https://picsum.photos/200', 'lots of words', 12);