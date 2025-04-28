import { Ellipsis, Plus } from "lucide-react"
import TodoComponent from "../../compoenets/TodoComponent"


const NewTask = () => {
  return (
    <div className="col-span-1 h-screen overflow-scroll swim-lane">
      <div className="flex justify-between  items-center bg-slate-600 px-3 rounded-t-md">
        <div className="font-semibold text-lg text-white ">
          New
        </div>
        <div className="flex justify-center items-center gap-3">
          <Ellipsis className="text-white cursor-pointer" />
          <Plus className="text-white cursor-pointer" />
        </div>
      </div>
      <TodoComponent title="Task" />
      <TodoComponent title="Task-1" />
      <TodoComponent title="Task-2" />
      <TodoComponent title="Task-3" />
    </div>
  )
}


export default NewTask
