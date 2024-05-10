-- Create a table for 5 products with product names and prices
-- Product table
CREATE TABLE products
(
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Insert some sample data into the products table
INSERT INTO products (product_name, price) VALUES ('Apple iPhone 11', 699.99);
INSERT INTO products (product_name, price) VALUES ('Samsung Galaxy S10', 799.99);
INSERT INTO products (product_name, price) VALUES ('Google Pixel 4', 799.99);
INSERT INTO products (product_name, price) VALUES ('OnePlus 7T', 599.99);
INSERT INTO products (product_name, price) VALUES ('Huawei P30 Pro', 599.99);

-- Path: demo.sql
-- Create a table for 5 customers with customer names and emails
-- Customer table
CREATE TABLE customers
(
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    email VARCHAR(100)
);

-- Insert some sample data into the customers table
INSERT INTO customers (customer_name, email) VALUES ('John Doe', '