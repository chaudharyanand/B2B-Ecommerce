import Product from "../models/product";

export const mapper = (response: any) => {
  if (!response) return null;

  const products: Product[] = [];
  response.forEach((item: any) => {
    products.push(Product.fromResponse(item));
  });

  return products;
};

export const mapperSingle = (response: any) => {
  return response ? Product.fromResponse(response) : null;
};
