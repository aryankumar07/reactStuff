import { createBrowserRouter } from "react-router";
import Board from "./board";
import Home from './board/Home'
import List from './board/list'
import Activity from "./compoenets/activities";
import Schedule from "./board/schedule";
import DashBoard from "./board/DashBoard";
import Note from "./board/note";
import Bug from './board/bug'


const routes = createBrowserRouter([
  {
    Component: Board,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/list',
        Component: List
      },
      {
        path: '/activity',
        Component: Activity
      },
      {
        path: '/tasks',
        Component: Home
      },
      {
        path: '/schedule',
        Component: Schedule
      },
      {
        path: '/dashboard',
        Component: DashBoard
      },
      {
        path: '/note',
        Component: Note
      },
      {
        path: '/bug',
        Component: Bug
      }
    ]
  }
])


export default routes
