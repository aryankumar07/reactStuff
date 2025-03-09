import { create } from 'zustand'

interface Inumber {
  phonenumber: string,
  setNumber: (phonenumber: string) => void
}


const useNumberStore = create<Inumber>()((set) => ({
  phonenumber: '',
  setNumber: (phonenumber) => set({ phonenumber })
}))


export default useNumberStore

