import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

interface props {
  icon: LucideIcon,
  title: string
}



const SidebarButton: React.FC<props> = ({
  icon: Icon,
  title
}) => {


  const path = useLocation()

  const pathName = path.pathname.slice(1)


  const isActive = pathName === title.toLowerCase() ? true : false





  return (
    <Link
      to={`/${title.toLocaleLowerCase()}`}
      className={`
      flex gap-3 p-2 justify-start items-center cursor-pointer
      hover:bg-white
      hover:rounded-xl
      ${isActive ? 'rounded-xl' : ''}
      ${isActive ? 'bg-white' : ''}
      `}
    >
      <Icon />
      <div className="text-lg font-semibold">
        {title}
      </div>
    </Link>
  )
}

export default SidebarButton
