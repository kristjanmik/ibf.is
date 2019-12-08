import is from "./languages/is.js";
import en from "./languages/en-us.js";

const dict = {
  is,
  "en-us": en,
};

export const withLang = language => {
  if (!["is", "en-us"].includes(language))
    throw Error(`Language does not exists:"${language}"`);

  return (...args) => {
    const [key] = args;

    let string = "";

    if (dict[language][key]) {
      string = dict[language][key];
    } else if (dict["en-us"][key]) {
      console.warn(
        `Could not find language string for ${language}/${key}. Defaulting to English (en-us)`
      );
      string = dict["en-us"][key];
    } else {
      console.warn(
        `Could not find any language for string ${key}. Defaulting to a blank text`
      );
    }

    //Manipulate string with inputs
    const replacers = args.slice(1);

    replacers.forEach(r => (string = string.replace("%s", r)));

    return string;
  };
};
