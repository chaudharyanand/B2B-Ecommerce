export default class TranslatedText {
  id: number;
  key: string;
  translatedText: string;

  constructor(id: number, key: string, translatedText: string) {
    this.id = id;
    this.key = key;
    this.translatedText = translatedText;
  }

  static fromResponse(item: any) {
    return new TranslatedText(
      item.id,
      item.attributes.key,
      item.attributes.translatedText
    );
  }
}
