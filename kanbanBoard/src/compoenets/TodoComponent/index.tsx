

interface props {
  title: string
}


const TodoComponent: React.FC<props> = ({
  title
}) => {
  return (
    <div draggable className="
    font-bold cursor-grab text-xl bg-blue-200 text-white h-40 mt-2 mb-2 
    rounded-lg flex justify-center items-center task">
      {title}
    </div>
  )
}


export default TodoComponent
