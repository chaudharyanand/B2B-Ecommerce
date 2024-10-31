import ProductCategory from "../models/product-category";

export const mapper = (response: any) => {
  if (!response) return null;

  const productCategories: ProductCategory[] = [];
  response.forEach((item: any) => {
    productCategories.push(ProductCategory.fromResponse(item));
  });

  return productCategories;
};

export const mapperSingle = (response: any) => {
  return response ? ProductCategory.fromResponse(response) : null;
};
