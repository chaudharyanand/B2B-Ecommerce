import Image from "./image";

export default class ProductCategory {
  id: number;
  name: string;
  image?: Image;
  icon: string;
  slug: string;
  products: number[] = [];
  active: boolean;

  constructor(
    id: number,
    name: string,
    image: Image | null,
    icon: string,
    slug: string,
    products: number[],
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    if (image) this.image = image;
    this.icon = icon;
    this.slug = slug;
    this.products = [...products];
    this.active = active;
  }

  static fromResponse(response: any) {
    return new ProductCategory(
      response.id,
      response.attributes.name,
      Image.fromStrapi(response.attributes.image),
      response.attributes.icon ? response.attributes.icon.url : "",
      response.attributes.slug,
      response.attributes.products != null
        ? response.attributes.products.data.map((product: any) => product.id)
        : [],
      response.attributes.active
    );
  }
}

export const StrapiParams = "populate=*&sort=sortOrder";
