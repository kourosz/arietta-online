/*

cockroach sql --url "postgresql://kourosz@sky-shadow-3758.6xw.cockroachlabs.cloud:26257/arietta-online?sslmode=verify-full"
Password: _k11r1B-KcjX_4y23TU57A

*/

DROP TYPE ProductType;
create TYPE ProductType as ENUM (
    'Rubber', 'Blade', 'Clothes','Shoes', 'Glues'
);

DROP TYPE Companies;
create TYPE Companies as ENUM (
    'GEWO', 'JUIC', 'DHS','YASAKA', '729', 'STIGA', 'Arbalest', 'Hallmark'
);

DROP TYPE Attribute;
CREATE TYPE Attribute as ENUM (
    'Color', 'Thickness', 'Handle', 'Hardness', 'Size'
);

DROP TABLE Product;
create table if not exists Product (
    id UUID Primary Key,
    name varchar(100) NOT NULL,
    productType ProductType NOT NULL,
    images JSONB,
    company Companies NOT NULL,
    description VARCHAR(1024),
    UNIQUE(name)
);

CREATE TABLE AttributeValue (
    id int Primary Key,
    name Attribute not null,
    value varchar(20)
);

CREATE TABLE ProductVariant (
    id UUID Primary Key,
    productId UUID NOT NULL,
    attributeId1 int not null References AttributeValue(id),
    attributeId2 int References AttributeValue(id),
    attributeId3 int References AttributeValue(id),
    attributeId4 int References AttributeValue(id),
    attributeId5 int References AttributeValue(id),
    unique(productId,attributeId1,attributeId2,attributeId3,attributeId4,attributeId5)
);

INSERT INTO Product 
    (id, name, productType, images, company, price, definedVariants, variants, description) 
    VALUES 
    (gen_random_uuid(), 'MasterSpin Special', 'Rubber', '["masterSpinSpecial.jpeg"]', 'JUIC', 45.00, '["Color","Thickness"]', '[ { "combination": ["Red", "1.5"], "qty": 1} ]', 'Medium pimpled rubber with strenghten pimple-base for increased durability in offense play. Rather thin, relatively much spaced out pimples for increased disturbing effect.');


DROP TABLE Inventory;
CREATE TABLE Inventory (
    productId UUID,
    variant 
)
