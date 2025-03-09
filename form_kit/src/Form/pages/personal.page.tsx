import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import useNumberStore from "@/stores/PhoneNumberStore"


const Personalpage = () => {

  const phonenumber = useNumberStore((state) => state.phonenumber)
  const setNumber = useNumberStore((state) => state.setNumber)

  const {
    register,
  } = useFormContext()

  return (
    <div className="flex flex-col gap-3 justify-start items-start ">
      <div className="font-bold text-5xl">
        Personal Information
      </div>
      <div className="font-semibold text-xl">
        Enter Your Personal Information This is Used to Contact You
      </div>

      <div className="flex justify-between items-center gap-3 mt-8 w-full">
        <div className="flex-1 flex flex-col justify-center items-start gap-3">
          <h1>First Name</h1>
          <Input {...register("fname")} type="text" placeholder="Brett" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-3">
          <h1>Last Name</h1>
          <Input {...register("lname")} type="text" placeholder="Singh" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-3 mt-8 w-full">
        <div className="flex-1 flex flex-col justify-center items-start gap-3">
          <h1>Email</h1>
          <Input {...register("email")} type="Email" placeholder="example@gmail.com" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-3">
          <h1>Phone Number</h1>
          <PhoneInput
            className="border rounded-md w-full h-9"
            value={phonenumber}
            onChange={(value) => {
              setNumber(value!)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Personalpage 
