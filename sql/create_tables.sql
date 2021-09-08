DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS  users (
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
); 


DROP TABLE IF EXISTS posts;

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL, 
    title VARCHAR(255) NOT NULL,
    content VARCHAR(1000) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT fk_user
     FOREIGN KEY(user_id)
      REFERENCES users(id)
       ON DELETE CASCADE
)
