import { useEffect } from "react"
import ButtonOne from "./button_one";
import useLocalstorage from "./hooks/useLocalStorage";

const App = () => {
  const [storedValue, setSoredValue] = useLocalstorage("theme", "light");
  useEffect(() => {
    let selectedTheme = storedValue;
    if (selectedTheme) {
      document.body.classList.add(selectedTheme)
    } else {
      setSoredValue("dark")
      document.body.classList.add("dark")
    }
  }, [])
  return (
    <div className="h-[100vh] font-bold text-3xl bg-background text-foreground relative">
      <div className="absolute top-[50vh] left-[45vw] ">
        <ButtonOne />
      </div>
    </div>
  )
}

export default App;
