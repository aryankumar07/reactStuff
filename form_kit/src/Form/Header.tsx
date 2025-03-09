import { Headings } from './types.ts'


interface HeaderProps {
  index: number
}


const Header: React.FC<HeaderProps> = ({
  index
}) => {
  return (
    <div className="flex gap-4 justify-center items-center w-full p-1 ">
      {
        Object.values(Headings).map((heading, pos) => {
          return (
            <div key={heading} className='flex flex-col justify-center items-start w-7xl gap-3'>
              <div className={`flex gap-1 ${index === pos ? 'text-violet-600' : 'text-foreground'}`}>
                <span>{pos + 1}.</span>
                <span>{heading}</span>
              </div>
              <div className={`${index === pos ? 'bg-violet-600' : 'bg-violet-300'} rounded-sm w-full h-3`}></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Header
