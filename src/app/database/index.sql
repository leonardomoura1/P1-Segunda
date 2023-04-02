/* arquivo nao foi utlizado porque o banco utilizado foi o mongodb */

CREATE DATABASE IF NOT EXISTS mydatabase;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS desenhos(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    category_id UUID NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories (id)
);