/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?

   SELECT * FROM book1;

Q2) What is the query for using a specific database?
   SELECT * FROM book1
   WHERE id=1;

Q3) What is the query for creating a new database called `meraki`?
   INSERT INTO book1 (title)
       VALUES (meraki);

Q4) What is the query for deleting a database called `meraki`?

DELETE FROM book1 WHERE title='meraki';

Q5) What is the query for displaying all the tables for a database called `meraki`?
SELECT * FROM book1
WHERE title='meraki';

Q6) What is the query for displaying the columns of a table called `users`?
    SELECT users
    FROM users;
    
Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?

INSERT INTO book1 (name, email, password)
VALUES (value1, value2, value3, ...);

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?
UPDATE users
SET name = 'info@meraki-academy.org'
WHERE CustomerID = 1;

Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?

DELETE FROM users WHERE name='info@meraki-academy.org';
Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)
SELECT book1.id, users.name, book1.Date
FROM book1
INNER JOIN users ON book1.id=users.id;

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?
SELECT name
FROM users
WHERE name BETWEEN 20 AND 30;

*/
