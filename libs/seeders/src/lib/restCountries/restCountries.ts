import { RestCountries } from "./interfaces";

export async function fetchRestCountries(): Promise<RestCountries.Country[]> {
  const rawResponse = await fetch("https://restcountries.com/v3.1/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response: RestCountries.Country[] = await rawResponse.json();
  return response;
}
