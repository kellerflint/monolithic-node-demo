CREATE TABLE PizzaOrder (
    id INT NOT NULL IDENTITY(1,1),
    size VARCHAR(255) NOT NULL,
    toppings VARCHAR(255) NOT NULL,
    crust VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
);