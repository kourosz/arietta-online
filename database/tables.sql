/*

cockroach sql --url "postgresql://kourosz@sky-shadow-3758.6xw.cockroachlabs.cloud:26257/arietta-online?sslmode=verify-full"
Password: _k11r1B-KcjX_4y23TU57A

*/

DROP TYPE ProductType;
create TYPE ProductType as ENUM (
    'Rubber', 'Blade', 'Clothes','Shoes', 'Glues'
);

DROP TYPE Company;
create TYPE Companies as ENUM (
    'GEWO', 'JUIC', 'DHS','YASAKA', '729', 'STIGA', 'Arbalest', 'Hallmark'
);

DROP TYPE Attribute;
CREATE TYPE Attribute as ENUM (
    'Color', 'Thickness', 'Handle', 'Hardness', 'Size'
);

DROP TABLE Product;
create table (
    id UUID Primary Key default gen_random_uuid(),
    name varchar(100) NOT NULL,
    productType ProductType NOT NULL,
    images JSONB,
    company Company NOT NULL,
    description VARCHAR(1024),
    extra JSONB null,
    UNIQUE(name)
);

CREATE TABLE AttributeValue (
    id int Primary Key,
    name Attribute not null,
    value varchar(20)
);

CREATE TABLE ProductVariant (
    id UUID Primary Key default gen_random_uuid(),
    productId UUID NOT NULL References Product(id),
    attributeId1 int not null References AttributeValue(id),
    attributeId2 int References AttributeValue(id),
    attributeId3 int References AttributeValue(id),
    attributeId4 int References AttributeValue(id),
    attributeId5 int References AttributeValue(id),
    unique(productId,attributeId1,attributeId2,attributeId3,attributeId4,attributeId5)
);

Create TABLE Inventory (
    id Primary Key,
    productVariantId uuid NOT NULL References ProductVariant(id),
    date datetime NOT NULL,
    qty int2 not null
);

/* 
INSERT INTO Product 
    (id, name, productType, images, company, price, definedVariants, variants, description) 
    VALUES 
    (gen_random_uuid(), 'MasterSpin Special', 'Rubber', '["masterSpinSpecial.jpeg"]', 'JUIC', 45.00, '["Color","Thickness"]', '[ { "combination": ["Red", "1.5"], "qty": 1} ]', 'Medium pimpled rubber with strenghten pimple-base for increased durability in offense play. Rather thin, relatively much spaced out pimples for increased disturbing effect.');

*/

DROP TABLE Inventory;
CREATE TABLE Inventory (
    productVariantId UUID Primary Key,
    qty int,
    lastUpdated timestamp default current_timestamp()
);

CREATE TABLE UserAccount (
    id UUID Primary Key,
    fullName varchar(100) not null,
    address varchar(250),
    postalAddress varchar(250) null,
    country varchar(20) not null default('au'),
    password varchar(256),
    createdTime timestamp not null default current_timestamp(),
    updatedTime timestamp not null default current_timestamp(),
    UNIQUE(fullName)
);

CREATE TYPE TransactionType as ENUM ('IN', 'OUT');

CREATE TYPE Currency as ENUM ('AUD', 'EURO');

CREATE SEQUENCE invoice_number;

CREATE TABLE Transaction (
    id int Primary Key,
    transactionType TransactionType not null,
    serialNo INT DEFAULT nextval('invoice_number'),
    date date not null,
    company Companies null,
    userAccountId UUID null,
    currency Currency not null,
    shipping decimal(4,2) default 0,
    exchangeRate decimal,
    unique (serialNo)
);

CREATE table TransactionItems (
    transactionId int References Transaction(id),
    productVariantId UUID not null References ProductVariant(id),
    qty int not null,
    rownum INT not null,
    price decimal(4,2),
    UNIQUE(transactionId, rownum)

);
