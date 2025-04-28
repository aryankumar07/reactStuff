import { useEffect } from "react"
import CompletedTask from "../completed"
import InProgressTask from "../InProgress"
import NewTask from "../new"
import PendingTask from "../Pending"
import '../../index.css'


const Home = () => {

  useEffect(() => {

    const draggable = document.querySelectorAll('.task')
    const dropable = document.querySelectorAll('.swim-lane')

    draggable.forEach((task) => {
      task.addEventListener('dragstart', () => {
        task.classList.add('is-dragging')
      })

      task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging')
      })
    })


    dropable.forEach((zone) => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault()
        const DraggedTask = document.querySelector('.is-dragging')
        zone.appendChild(DraggedTask!)
      })
    })
  })



  return (
    <div className="grid grid-cols-4 gap-3">
      <NewTask />
      <PendingTask />
      <InProgressTask />
      <CompletedTask />
    </div>
  )
}


export default Home
