delete Person
from Person
inner join (
   select min(id) as lastId, email
   from Person
   group by email
   having count(*) > 1
) duplic on duplic.email = Person.email
where Person.id > duplic.lastId ;