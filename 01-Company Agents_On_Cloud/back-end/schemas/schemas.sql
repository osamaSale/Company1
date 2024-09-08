USE Agents;


CREATE TABLE seller (
    id_seller INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone varchar(255) NOT NULL,
    type varchar(255) NOT NULL
);

CREATE TABLE buyer (
    id_buyer INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_seller INT(5),
    name_buyer VARCHAR(255) NOT NULL,
    email_buyer VARCHAR(255) NOT NULL,
    Reservation_date DATETIME NOT NULL,
    accept_reject varchar(255),
    FOREIGN KEY (id_seller) REFERENCES seller (id_seller)
);