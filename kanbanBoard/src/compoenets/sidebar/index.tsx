import { X, PanelLeftOpen, Logs, Zap, LayoutDashboard, LucideCalendarSync, StickerIcon, Bug, Settings, Headset } from "lucide-react"
import { useState } from "react"
import SidebarButton from "./sidebarButton"
import Divider from "../divider"
import ProfileCard from "../profileCard"
import { Link } from "react-router-dom"



const Sidebar = () => {


  const [openSidebar, setOpenSidebar] = useState<boolean>(false)






  const handleSidebarButton = () => {
    setOpenSidebar((prev) => !prev)
  }



  if (openSidebar) {
    return (
      <div className="h-screen bg-[#CBC3E3] min-w-16 p-1.5 flex flex-col gap-5 justify-start items-center">
        <div className="flex flex-col items-center w-full">
          <PanelLeftOpen className="cursor-pointer mb-4" onClick={handleSidebarButton} />

          {/* Collapsed Navigation */}
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Top Section */}
            <div className="flex flex-col items-center gap-6">
              <Link to="/tasks" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <Logs className="w-5 h-5" />
              </Link>
              <Link to="/activity" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <Zap className="w-5 h-5" />
              </Link>
            </div>


            {/* Main Section */}
            <div className="flex flex-col items-center gap-6">
              <Link to="/dashboard" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <LayoutDashboard className="w-5 h-5" />
              </Link>
              <Link to="/schedule" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <LucideCalendarSync className="w-5 h-5" />
              </Link>
              <Link to="/notes" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <StickerIcon className="w-5 h-5" />
              </Link>
              <Link to="/bugs" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <Bug className="w-5 h-5" />
              </Link>
            </div>


            {/* Bottom Section */}
            <div className="flex flex-col items-center gap-6">
              <Link to="/settings" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <Settings className="w-5 h-5" />
              </Link>
              <Link to="/support" className="p-2 rounded-md hover:bg-[#b5aad4] w-full flex justify-center">
                <Headset className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    )
  }



  return (
    <div className={
      `h-screen bg-[#CBC3E3] min-w-56 p-1.5 
      flex flex-col gap-5 justify-start items-center
      ${openSidebar ? 'hidden' : ''}
      `}>
      <div className="flex justify-between items-center w-full">
        <div className="text-3xl font-bold text-orange-200">
          KanBan
        </div>
        <X className="cursor-pointer" onClick={handleSidebarButton} />
      </div>


      <Divider />

      <div className="flex flex-col items-center justify-between">

        <div className="flex flex-col gap-2 mt-5 mb-5">
          <SidebarButton icon={Logs} title="Tasks" />
          <SidebarButton icon={Zap} title="Activity" />
        </div>


        <Divider />

        <div className="flex flex-col gap-2 mt-5 mb-5">
          <div className="text-xl font-semibold">Main</div>
          <SidebarButton icon={LayoutDashboard} title="DashBoard" />
          <SidebarButton icon={LucideCalendarSync} title="Schedule" />
          <SidebarButton icon={StickerIcon} title="Note" />
          <SidebarButton icon={Bug} title="Bug" />
        </div>

        <Divider />


        <div className="flex flex-col gap-2 mt-5 mb-5">
          <SidebarButton icon={Settings} title="Settings" />
          <SidebarButton icon={Headset} title="Support" />
        </div>

      </div>

      <div>
        <ProfileCard
          name="Alex Johnson"
          size="small"
          rounded={false}
        />
      </div>

    </div>
  )
}
export default Sidebar 
