export enum ProductType {
    Rubber = "Rubber",
    Blade = "Blade",
    Clothes = "Clothes",
    Shoes = "Shoes",
    Accessories = "Accessories"
}

// export const attributes = [
//     { name: "Color", variants: ['Black', 'Blue','Red', 'Green']},
//     { name: "Handle Type", variants: ['FL', 'ST', 'AN']},
//     { name: "Thickness", variants: ['1.8', '1.9','2.0','2.1','2.2', 'Max']}
// ];

// export type ProductVariant = {
//     variant: string,
//     values: 
// }
export type Variant = {
    no: number,
    combination: string[]
};

export type Product = {
    id: string,
    name: string,
    productType: ProductType,
    images: string[],
    company: string,
    price: number,
    salePrice?: number,
    definedVariants: string[],
    variants?: Variant[],
    description: string
};
// export const products: Product[] = [
//     {
//         id: "1", 
//         name: "MasterSpin Special", 
//         productType: ProductType.Rubber,
//         images: ["masterSpinSpecial.jpeg"],
//         company: 'Juic', 
//         price: 45,
//         definedVariants: ["Color","Thickness"], 
//         variants: [ 
//             { no: 1, combination: ['Red', '1.5'] },
//         ],
//         description: `Medium pimpled rubber with strenghten pimple-base for increased durability in offense play. Rather thin, relatively much spaced out pimples for increased disturbing effect.`    },
// ];

export type Inventory = {
    productId: string,
    no: number,
    qty: number
};

export const inventory: Inventory[] = [
    { productId: "1", no: 1, qty: 1}
];

