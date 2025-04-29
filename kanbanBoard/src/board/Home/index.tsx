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
        let BottomTask = null;
        if (e instanceof DragEvent) {
          BottomTask = getTask(zone, e.clientY)
        }


        if (BottomTask) {
          zone.insertBefore(DraggedTask!, BottomTask)
        } else {
          zone.appendChild(DraggedTask!)
        }
      })
    })

    function getTask(zone: Element, mouseY: number) {
      const tasks = zone.querySelectorAll('.task:not(.is-dragging)')
      let bottomTask = null;
      let minDist = Number.NEGATIVE_INFINITY
      tasks.forEach((ele: Element) => {
        const { top } = ele.getBoundingClientRect()
        const dist = mouseY - top;
        if (dist < 0 && dist > minDist) {
          bottomTask = ele
          minDist = dist
        }
      });
      console.log(bottomTask)
      return bottomTask;
    }


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
