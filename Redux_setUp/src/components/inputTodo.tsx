import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice"




const InputTodo = () => {

  const dispatch = useDispatch()

  const [input, setinput] = useState<string>('')

  const handleSubmit = () => {
    if (input.length === 0) return alert("Type something")
    dispatch(addTodo(input))
    setinput('')
  }

  return (
    <div className="flex gap-3">
      <input type="text" id='todo' onChange={(e: ChangeEvent<HTMLInputElement>) => setinput(e.target.value)} value={input} placeholder="Type Your Todo" />
      <button onClick={handleSubmit} >Add</button>
    </div>
  )
}


export default InputTodo
