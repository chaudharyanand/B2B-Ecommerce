// export default class TaxClass {
//   id: number;
//   name: string;
//   percent: number;
//   label: string;
//   slug: string;

//   constructor(
//     id: number,
//     name: string,
//     percent: number,
//     label: string,
//     slug: string
//   ) {
//     this.id = id;
//     this.name = name;
//     this.percent = percent;
//     this.label = label;
//     this.slug = slug;
//   }

//   static fromResponse(response: any) {
//     return new TaxClass(
//       response.id,
//       response.attributes.name,
//       response.attributes.percent,
//       response.attributes.label,
//       response.attributes.slug
//     );
//   }

//   static fromResponseArray(responseArray: any) {
//     const taxClasses: TaxClass[] = [];
//     responseArray.forEach((response: any) => {
//       taxClasses.push(TaxClass.fromResponse(response));
//     });

//     return taxClasses;
//   }
// }
export class TaxClassLite {
  slug: string;
  percent: number;

  constructor(slug: string, percent: number) {
    this.slug = slug;
    this.percent = percent;
  }
}

export default class TaxClass {
  id: number;
  name: string;
  percent: number;
  label: string;
  slug: string;

  constructor(
    id: number,
    name: string,
    percent: number,
    label: string,
    slug: string
  ) {
    this.id = id;
    this.name = name;
    this.percent = percent;
    this.label = label;
    this.slug = slug;
  }

  static blank() {
    return new TaxClass(-1, "", 0.0, "", "");
  }

  static fromResponse(response: any) {
    return new TaxClass(
      response.id,
      response.attributes.name,
      response.attributes.percent,
      response.attributes.label,
      response.attributes.slug
    );
  }

  static fromResponseArray(responseArray: any) {
    const taxClasses: TaxClass[] = [];
    responseArray.forEach((response: any) => {
      taxClasses.push(TaxClass.fromResponse(response));
    });

    return taxClasses;
  }

  asLite = (): TaxClassLite => {
    return new TaxClassLite(this.slug, this.percent);
  };
}

export const TaxClassA = "tax-class-a";
export const TaxClassB = "tax-class-b";
export const TaxClassC = "tax-class-c";
