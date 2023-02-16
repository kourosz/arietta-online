import Redis from "ioredis";
import type { Product } from "./entities";

export async function getProducts() {

    const redis = new Redis();
    
    const redisResp = await redis.get("products");
    let allProducts: Product[] = JSON.parse(redisResp??"[]");
    
    if (!allProducts.length) {
      const response = await fetch(import.meta.env.HOST_URL+"/data/products.json");
      allProducts = await response.json() as Product[];
      redis.set("products", JSON.stringify(allProducts));
    }

    return allProducts;
}