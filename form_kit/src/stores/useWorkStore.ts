import { create } from "zustand"

interface Ijob {
  title: string,
  company: string,
  startDate: Date,
  endDate: Date,
  desc: string
}


interface IworkStore {
  job: Ijob[],
  setJob: (job: Ijob) => void
}

export const useWorkStore = create<IworkStore>()((set) => ({
  job: [],
  setJob: (newjob) => set((state) => ({
    job: { ...state.job, newjob }
  }))
}))




