import { Input } from "@/components/ui/input"
import { ChangeEvent, useRef, useState } from "react"
import { useFormContext } from "react-hook-form"
import { FileCheck2, Trash2 } from "lucide-react"
import Inputbox from "@/components/ui/InputBox"

const Resumepage = () => {

  const [files, setFiles] = useState<File[]>([])
  const InputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    setValue,
  } = useFormContext()


  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }


  const handleDelete = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    setFiles(updatedFiles)

    const dataTransfer = new DataTransfer()
    updatedFiles.forEach((file) => dataTransfer.items.add(file))

    if (InputRef) {
      InputRef.current!.files = dataTransfer.files
    }
    setValue('resume', dataTransfer.files)
  }

  return (
    <div className="flex flex-col gap-3 justify-start items-start ">
      <div className="font-bold text-5xl">
        Resume
      </div>
      <div className="font-semibold text-xl">
        Upload Your Resume. It Helps Us To Know You More
      </div>


      <Input
        {...register('resume')}
        ref={InputRef}
        type="file"
        id="resume"
        accept="application/pdf"
        onChange={handleFileChange}
        multiple
      />

      {files &&
        files.map((file, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center w-full mt-8"
            >
              <div className="flex gap-2 justify-center items-center">
                <FileCheck2 className="text-red-500" />
                {file.name}
              </div>
              <Trash2 onClick={() => handleDelete(index)} className="hover:text-red-500 cursor-pointer" />
            </div>
          )
        })
      }



    </div>
  )
}

export default Resumepage 
