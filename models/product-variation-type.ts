export default class ProductVariationType {
  id: number;
  name: string;
  slug: string;

  constructor(id: number, name: string, slug: string) {
    this.id = id;
    this.name = name;
    this.slug = slug;
  }

  static fromResponse(response: any) {
    return new ProductVariationType(
      response.id,
      response.attributes.name,
      response.attributes.slug
    );
  }
}
