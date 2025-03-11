import { generateUUID } from "@/lib/utils"
import { ClipboardPen } from 'lucide-react'
import { useState } from "react"
import JobCard from "@/components/jobCard"

const Workpage = () => {

  const [jobs, setJobs] = useState<string[]>([])


  const handleJobSubmit = () => {
    const uuid = generateUUID()
    setJobs((prev) => [...prev, uuid])

  }


  const handleDelete = (uuid: string) => {
    const newjobs = jobs.filter((job: string) => job !== uuid)
    setJobs(newjobs)
  }



  return (
    <div className="flex flex-col gap-3 justify-start items-start ">
      <div className="font-bold text-5xl">
        Work Experience
      </div>
      <div className="font-semibold text-xl"> Enter Your Work Experience. This information is used to evaluate your application
      </div>

      <div className="flex flex-col gap-3 justify-start items-center w-full" >
        {
          jobs.map((job, index) => {
            return <JobCard onClick={() => handleDelete(job)} index={index} key={job} />
          })
        }
      </div>


      <div
        onClick={handleJobSubmit}
        className="flex justify-center items-center gap-3 text-purple-600 cursor-pointer mt-8">
        <ClipboardPen />
        <h1>Add Job</h1>
      </div>
    </div>
  )
}

export default Workpage 
