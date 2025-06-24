CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE publishers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author_id INT REFERENCES authors(id),
  publisher_id INT REFERENCES publishers(id),
  available_qty INT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE borrow_records (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  book_id INT REFERENCES books(id),
  borrow_date DATE,
  return_date DATE
);
