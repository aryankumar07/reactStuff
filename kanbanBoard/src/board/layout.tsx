import React from "react"
import Sidebar from "../compoenets/sidebar"
import Navbar from "../compoenets/navbar"

interface props {
  children: React.ReactNode
}


const Layout: React.FC<props> = ({
  children
}) => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar />
        {/* Children */}
        {children}
      </div>
    </div>
  )
}


export default Layout
