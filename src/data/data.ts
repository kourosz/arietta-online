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
    id: number,
    name: string,
    productType: ProductType,
    images: string[],
    company: string,
    price: number,
    salePrice?: number,
    definedVariants?: string[],
    variants?: Variant[],
    description: string
};
export const products = [
    {
        id: 1, 
        name: "NexXus EL Pro 53 Super Select", 
        productType: ProductType.Rubber,
        images: ["1.jpeg"],
        company: 'Gewo', 
        price: 75,
        salePrice: 65,
        definedVariants: ["Color","Thickness"], 
        variants: [ 
            { combination: ['Green', '2.1'], qty: 1},
        ],
        description: `For attackers aiming at winning quick points using all modern, offensive stroke techniques.
        Maximum catapult, spin and ultimate speed for a rubber of the hard sponge segment.
        Uncompromising OFF power and dynamics for table tennis on Pro Player level.
        
        Optimized Trajectory Tec (OTT)
        The new GEWO Nexxus SuperSelect rubbers are designed to meet even the highest requirements as regards acceleration and stability. Our goal was to develop a more compact sponge texture making the rubber more dynamic and elastic without increasing its weight. The new Optimized Trajectory Tec (OTT) is the innovative outcome of this development.
        More elastic air cells in the medium-pore sponge (SuperSelect Sponge Cells) provide for a flexible and dynamic feel despite the hardness and save weight at the same time. As a result, a higher density is reached in the sponge, which not only yields more spin and dynamics but also provides for a longer ball trajectory.
        Optimized Trajectory Tec (OTT) is the key for state-of-the art, high-performance table tennis in combination with hard and dynamic sponges.
        
        Super Select Transmission Tec (SSTT)
        Our brand-new Super Select Transmission Tec system (SSTT) stands for optimum transfer of spin and speed onto the ball. The new surface properties enable easy blocking and counterattacking of spin-loaded topspins with a flat ball trajectory avoiding unforced errors. Thanks to the special rubber mixture which guarantees a longer dwell time of the ball, your own topspin attacks still come easy and will present a tough challenge for many of your opponents.
        
        DGC40+ 2.0
        DGC40+ 2.0 stands for consistent, reliable coupling upon ball contact, and the grippy surface prevents slipping of the ball. The introduction of the latest ball generation (e.g. GEWO Select Pro 40+ ***) called for a further development and adaptation of rubber top sheets resulting in the DGC40+ Dynamic-Grip-Concept 2.0. The top sheet was specially developed for and adjusted to the requirements of the latest ball generations. If you dont go forward, you go backwards!
        
        Elastic Rubber
        The EL rubber (Elastic Rubber), despite its compactness provides for great ball contact feedback and a unique feel. All rubbers of this series are made for spin. The pimple heads in the rubber are arranged at a smaller distance from one another, and they are slightly thicker than in EL rubbers. When it comes to generating spin, the DGC40+ 2.0 top sheet unfolds its true strength (highly reliable coupling and maximum spin), as it provides for a slightly larger contact area upon ball contact. Enjoy a new experience!` 
    },
];
