import { create } from "zustand";


interface IAddressStore {
  country: string | undefined,
  state: string | undefined,
  city: string | undefined,
  setCountry: (country: string) => void,
  setState: (state: string) => void,
  setCity: (state: string) => void,
}


const useAddressStore = create<IAddressStore>()((set) => ({
  country: undefined,
  state: '',
  city: '',
  setCountry: (country) => set({ country }),
  setState: (state) => set({ state }),
  setCity: (city) => set({ city })
}))

export default useAddressStore

