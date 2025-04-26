import Layout from "./layout"
import { Outlet } from "react-router-dom"

const Board = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}


export default Board
