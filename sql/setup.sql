DROP TABLE IF EXISTS recipes; 

CREATE TABLE recipes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  ingredients TEXT NOT NULL,
  directions TEXT NOT NULL
);
