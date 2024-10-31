export default class Image {
  original: string;
  thumbail?: string;
  small?: string;
  medium?: string;
  large?: string;

  constructor(
    original: string,
    thumbnail: any,
    small: any,
    medium: any,
    large: any
  ) {
    this.original = original;
    if (thumbnail != null) this.thumbail = thumbnail.url;
    if (small != null) this.small = small.url;
    if (medium != null) this.medium = medium.url;
    if (large != null) this.large = large.url;
  }

  static fromStrapi(image: any): Image | null {
    if (image == null || image.data == null) return null;

    return new Image(
      image.data.attributes.url,
      image.data.attributes.formats.thumbnail,
      image.data.attributes.formats.small,
      image.data.attributes.formats.medium,
      image.data.attributes.formats.large
    );
  }

  static fromStrapiArray(imageData: any): Image[] {
    if (imageData == null) return [];

    return imageData.map(
      (image: any) =>
        new Image(
          image.attributes.url,
          image.attributes.formats.thumbnail,
          image.attributes.formats.small,
          image.attributes.formats.medium,
          image.attributes.formats.large
        )
    );
  }
}
