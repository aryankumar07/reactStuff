import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, DeleteIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const JobCard = () => {

  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setendDate] = useState<Date>()


  return (
    <div className="bg-slate-600 w-full p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Job#1</h1>
        <DeleteIcon className="text-red-600 cursor-pointer" />
      </div>
      <div className="flex gap-3 justify-between items-center w-full mt-4">
        <div className="flex flex-1 gap-2 flex-col justify-start">
          <h1>Job Title</h1>
          <Input
            placeholder="job Title"
          />
        </div>

        <div className="flex flex-1 gap-2 flex-col justify-start">
          <h1>Company</h1>
          <Input
            placeholder="Company"
          />
        </div>

        <div className="flex gap-2 flex-col justify-start">
          <h1>From</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "w-[240px] justify-start text-left font-normal bg-slate-600 text-muted-foreground border",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex gap-2 flex-col justify-start">
          <h1>To</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className={cn(
                  "w-[240px] justify-start text-left font-normal bg-slate-600 text-muted-foreground border",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setendDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid w-full gap-1.5 mt-4">
        <Label htmlFor="message">Company Description</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>

    </div>
  )
}


export default JobCard

