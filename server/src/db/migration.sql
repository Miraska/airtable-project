-- migration.sql
CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  autonumber VARCHAR(255),
  status VARCHAR(255),
  manager VARCHAR(255),
  date_created DATE,
  -- Прочие столбцы
);
