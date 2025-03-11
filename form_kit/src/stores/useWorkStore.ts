import { create } from "zustand"

interface Ijob {
  id: string,
  title: string,
  company: string,
  startDate: Date,
  endDate: Date,
  desc: string
}


interface IworkStore {
  job: Ijob[],
  setJob: (job: Ijob) => void,
  deleteJob: (id: string) => void
}

export const useWorkStore = create<IworkStore>()((set) => ({
  job: [],
  setJob: (newjob) => set((state) => ({
    job: { ...state.job, newjob }
  })),
  deleteJob: (id) => set((state) => ({
    job: state.job.filter((job) => id !== job.id)
  }))
}))




