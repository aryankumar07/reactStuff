import { useDispatch, useSelector } from "react-redux"
import { removeTodo, Todo } from "../features/todoSlice"

const ListTodo = () => {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()


  const handleDelete = (id: string) => {
    dispatch(removeTodo(id))
  }


  return (
    <div>
      {
        todos.map((todo: Todo) => {
          return (
            <div className="flex gap-8">
              <h1>{todo.todo}</h1>
              <button onClick={() => handleDelete(todo.id)}>Del</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListTodo
