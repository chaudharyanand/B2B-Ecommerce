import TranslatedText from "../models/translated-text";

export const mapper = (response: any) => {
  if (!response) return null;

  const translatedTexts: TranslatedText[] = [];

  response.forEach((item: any) => {
    translatedTexts.push(TranslatedText.fromResponse(item));
  });

  return translatedTexts;
};
