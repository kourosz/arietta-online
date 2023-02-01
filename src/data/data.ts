export enum ProductType {
    Rubber,
    Blade,
    Clothes,
    Accessories
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
    combination: string[],
    qty: number
}
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
export const products = [
    {
        id: "1", 
        name: "MasterSpin Special", 
        productType: ProductType.Rubber,
        images: ["masterSpinSpecial.jpeg"],
        company: 'Juic', 
        price: 45,
        definedVariants: ["Color","Thickness"], 
        variants: [ 
            { combination: ['Red', '1.5'], qty: 1},
        ],
        description: `Medium pimpled rubber with strenghten pimple-base for increased durability in offense play. Rather thin, relatively much spaced out pimples for increased disturbing effect.`    },
];
