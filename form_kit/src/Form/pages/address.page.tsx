import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useFormContext } from "react-hook-form"
import { LocateIcon } from "lucide-react"
import { CountryCodes, CountryNames, getStates, getCities, CountryToCode } from "../../lib/countries.ts"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  setKey,
  setLanguage,
  setRegion,
  geocode,
  RequestType,
} from "react-geocode";
import useAddressStore from "@/stores/useAddressstore.ts"
import { useEffect, useState } from "react"



const Addresspage = () => {

  setKey(import.meta.env.VITE_GOOPLEMAPAPI)
  setLanguage("en");
  setRegion("es")


  const {
    register,
    setValue,
  } = useFormContext()


  const [auto, setAuto] = useState<boolean>(false)
  const [states, setState] = useState<string[]>([])
  const [cities, setCity] = useState<string[]>([])


  const country = useAddressStore((state) => state.country)
  const setCountry = useAddressStore((state) => state.setCountry)

  const state = useAddressStore((state) => state.state)
  const setStoreState = useAddressStore((state) => state.setState)


  const city = useAddressStore((state) => state.city)
  const setStoreCity = useAddressStore((state) => state.setCity)



  useEffect(() => {
    if (country) {
      const states = getStates(country);
      setState(states);
    }
  }, [country]);

  useEffect(() => {
    if (country && state) {
      const cities = getCities(country, state);
      setCity(cities);
    }
  }, [country, state]);


  useEffect(() => {
    if (auto) {
      try {
        let location = null
        if (window && window.navigator.geolocation) {
          location = window.navigator.geolocation
        }

        if (location) {
          location.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            geocode(RequestType.LATLNG, `${lat},${long}`)
              .then(({ results }) => {
                const address = results[0].formatted_address;
                const { newcity, newstate, newcountry } = results[0].address_components.reduce(
                  (acc, component) => {
                    if (component.types.includes("locality"))
                      acc.newcity = component.long_name;
                    else if (component.types.includes("administrative_area_level_1"))
                      acc.newstate = component.long_name;
                    else if (component.types.includes("country"))
                      acc.newcountry = component.long_name;
                    return acc;
                  },
                  {}
                );
                if (CountryToCode[newcountry] !== country) setCountry(CountryToCode[newcountry]);
                if (newstate !== state) setStoreState(newstate);
                if (newcity !== city) setStoreCity(newcity);
                setValue('address', address)
              })
              .catch(console.error);
          })
        }
      } catch (e) {
        console.log(e)
      }

    }
  }, [auto])



  return (
    <div className="flex flex-col gap-3 justify-start items-start ">

      <div className="font-bold text-5xl">
        Address
      </div>
      <div className="font-semibold text-xl">
        Enter Your Address
      </div>

      <div className="flex flex-col gap-3 justify-start items-start w-full">
        <h1> Address </h1>
        <div className="flex justify-around items-center gap-3 w-full">
          <Input
            disabled={auto}
            className="flex-1"
            {...register('address')}
          />
          <Button
            disabled={auto}
            type="button"
            onClick={() => setAuto(true)}
            className="cursor-pointer" > <LocateIcon className={`${auto ? 'animate-spin' : ''}`} /> </Button>
        </div>
      </div>


      <div className="flex gap-3 w-full justify-around items-center mt-16">
        <div className="flex-1">
          <h1>Country</h1>
          <Select
            disabled={auto}
            value={country}
            onValueChange={(data) => setCountry(data)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {
                CountryCodes.map((cc) => {
                  return (
                    <SelectItem key={cc} value={cc}>{CountryNames[cc]}</SelectItem>
                  )
                })
              }
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <h1>State/Provinces</h1>
          <Select
            value={state}
            onValueChange={(data) => {
              if (!auto) {
                setStoreState(data)
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {
                states.map((state) => {
                  return <SelectItem key={state} value={state}>{state}</SelectItem>
                })
              }
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <h1>City</h1>
          <Select
            value={city}
            onValueChange={(data) => {
              if (!auto) {
                setStoreCity(data)
              } else {
                setAuto(false)
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a City" />
            </SelectTrigger>
            <SelectContent>
              {
                cities.map((city) => {
                  return <SelectItem key={city} value={city} >{city}</SelectItem>
                })
              }
            </SelectContent>
          </Select>
        </div>
      </div>


      <div className="flex w-full gap-3 justify-around items-center mt-12">
        <div className="flex-1">
          <h1>ZIP/Postal Code</h1>
          <Input {...register("pcode")} />
        </div>
        <div className="flex-1">
          <h1>Timezone</h1>
          <Input {...register("timezone")} />
        </div>
      </div>


    </div>

  )
}

export default Addresspage 
