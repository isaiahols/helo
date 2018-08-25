drop table if exists Users;

create table Users
(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

select *
from users;

