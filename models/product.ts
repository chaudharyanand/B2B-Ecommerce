import Image from "./image";
import ProductVariation from "./product-variation";
import TaxClass from "./tax-class";

export default class Product {
  id: number;
  name: string = "";
  mainImage?: Image;
  images: Image[] = [];
  price: number = 0.0;
  slug: string = "";
  categories: number[] = [];
  taxClasses: TaxClass[] = [];
  productVariations: ProductVariation[] = [];

  constructor(
    id: number,
    name: string,
    mainImage: Image | null,
    images: Image[],
    price: number,
    slug: string,
    categories: number[],
    taxClasses: TaxClass[],
    productVariations: ProductVariation[]
  ) {
    this.id = id;
    this.name = name;
    if (mainImage) this.mainImage = mainImage;
    this.images = [...images];
    this.price = price;
    this.slug = slug;
    this.categories = categories;
    this.taxClasses = taxClasses;
    this.productVariations = [...productVariations];
  }

  static fromResponse(response: any) {
    return new Product(
      response.id,
      response.attributes.name,
      Image.fromStrapi(response.attributes.mainImage),
      response.attributes.images.data != null
        ? Image.fromStrapiArray(response.attributes.images.data)
        : [],
      response.attributes.price,
      response.attributes.slug,
      response.attributes.productCategories != null
        ? response.attributes.productCategories.data.map(
            (category: any) => category.id
          )
        : [],
      response.attributes.taxClasses != null
        ? TaxClass.fromResponseArray(response.attributes.taxClasses.data)
        : [],
      response.attributes.productVariations != null
        ? ProductVariation.fromResponseArray(
            response.attributes.productVariations.data
          )
        : []
    );
  }
}

export const StrapiParams =
  "populate[mainImage]=*&populate[images]=*&populate[subProducts][populate]&populate[productCategories][populate]&populate[productPrices][populate]=*&populate[taxClasses]=*&populate[productVariations][populate]=*";
