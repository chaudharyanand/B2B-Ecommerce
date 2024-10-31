import ProductVariationType from "./product-variation-type";

export default class ProductVariation {
  id: number;
  name: string;
  productVariationType: ProductVariationType;

  constructor(
    id: number,
    name: string,
    productVariationType: ProductVariationType
  ) {
    this.id = id;
    this.name = name;
    this.productVariationType = productVariationType;
  }

  static fromResponse(response: any) {
    return new ProductVariation(
      response.id,
      response.attributes.name,
      ProductVariationType.fromResponse(
        response.attributes.productVariationType.data
      )
    );
  }

  static fromResponseArray(responseArray: any) {
    const productVariations: ProductVariation[] = [];
    responseArray.forEach((response: any) => {
      productVariations.push(ProductVariation.fromResponse(response));
    });

    return productVariations;
  }
}
