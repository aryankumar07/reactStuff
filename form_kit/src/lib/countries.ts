import countriesData from '../lib/countries.json'
import { CountriesDataType } from '@/Form/types';


const CountriesData: CountriesDataType = countriesData;

export const CountryCodes = Object.keys(CountriesData)

export const CountryToCode = Object.values(CountriesData).reduce((acc, curr) => {
  const code = curr['code']
  const name = curr['name']
  acc[name] = code.toLowerCase()
  return acc
}, {} as Record<string, string>)


export const CountryNames = CountryCodes.reduce((acc, curr) => {
  const data = CountriesData[curr as keyof typeof CountriesData];
  acc[curr] = data.name;
  return acc;
}, {} as Record<string, string>)


export const getStates = (countryCode: string) => {
  const data = CountriesData[countryCode].states;
  const States = data.map((curr) => {
    return curr.name
  })
  return States
}


export const getCities = (code: string, city: string) => {
  const data = CountriesData[code].states
  const cities = data.reduce((acc, curr) => {
    if (curr.name === city) {
      acc = curr.cities
    }
    return acc;
  }, [] as string[])
  return cities
}

