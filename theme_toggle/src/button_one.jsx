import { MoonStar, SunMedium } from 'lucide-react'
import useLocalstorage from './hooks/useLocalStorage';
const ButtonOne = () => {

  const [storedValue, setStoredValue] = useLocalstorage("theme", "light")

  const changeColor = () => {
    let theme = storedValue;
    if (theme === "light") {
      setStoredValue("dark")
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    } else if (theme === "dark") {
      setStoredValue("light")
      document.body.classList.remove("dark");
      document.body.classList.add("light")
    }
  }

  return (
    <div onClick={changeColor} className="flex flex-row justify-center p-1 w-auto border rounded-md relative">
      <SunMedium
        size={30}
        className={`absolute bg-background text-foreground transition-all duration-300 ease-in-out ${storedValue === "dark" ? "scale-0" : "scale-100"}`}
      />
      <MoonStar
        size={30}
        className={`bg-background text-foreground transition-all duration-300 ease-in-out ${storedValue === "dark" ? "scale-100" : "scale-0"} `}
      />
    </div>
  );
}


export default ButtonOne;
