import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

const Socialpage = () => {

  const {
    register
  } = useFormContext()


  return (
    <div className="flex flex-col gap-3 justify-start items-start ">
      <div className="font-bold text-5xl">
        Social Links
      </div>
      <div className="font-semibold text-xl">
        Enter Your Socail Links. It Helps Us To Know You More
      </div>

      <div className="flex gap-3 justify-center items-center w-full">
        <div className="flex flex-1 flex-col justify-start">
          <h1>Github Profile</h1>
          <Input
            {...register("github")}
            placeholder="Github Url"
          />
        </div>
        <div className="flex flex-1 flex-col justify-start">
          <h1>Portfolio Profile</h1>
          <Input
            {...register("portfolio")}
            placeholder="Portfolio Url"
          />
        </div>
      </div>






    </div>
  )
}

export default Socialpage 
