import { CountryModel } from "@rfm/interfaces";
import {
  englishFirstNames,
  englishLastNames,
  frenchFirstNames,
  frenchLastNames,
  germanFirstNames,
  germanLastNames,
  italianFirstNames,
  italianLastNames,
  spanishFirstNames,
  spanishLastNames,
  turkishFirstNames,
  turkishLastNames,
} from "@rfm/static";
import { random } from "@rfm/utility";

export function getRandomFullname(nationality: CountryModel.Base) {
  const firstName = getRandomFirstName(nationality);
  const lastName = getRandomLastName(nationality);

  return { firstName, lastName };
}

export function getRandomFirstName(nationality: CountryModel.Base) {
  if (!nationality) return "";
  const _dict: Record<string, string[]> = {
    TR: turkishFirstNames,
    DE: germanFirstNames,
    EN: englishFirstNames,
    FR: frenchFirstNames,
    IT: italianFirstNames,
    ES: spanishFirstNames,
  };
  return random.getRandomInArray(_dict[nationality.alpha2Code]);
}

export function getRandomLastName(nationality: CountryModel.Base) {
  if (!nationality) return "";
  const _dict = {
    TR: turkishLastNames,
    DE: germanLastNames,
    EN: englishLastNames,
    FR: frenchLastNames,
    IT: italianLastNames,
    ES: spanishLastNames,
  };
  return random.getRandomInArray(_dict[nationality.alpha2Code]);
}
