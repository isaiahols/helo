select *
from Posts p
    join users u on p.author_id = u.id
where p.id=$1;