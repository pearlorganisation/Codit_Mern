import React from "react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import {
  CalendarArrowDown,
  Layers,
  LayoutDashboard,
  Settings,
  ShoppingBasket,
  StickyNote,
  User,
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="">
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />
          <SidebarItem
            icon={<ShoppingBasket size={20} />}
            text="Products"
            alert
          />
          <SidebarItem icon={<CalendarArrowDown size={20} />} text="Orders" />
          <SidebarItem icon={<Layers size={20} />} text="Enquiries" />
          <SidebarItem icon={<User size={20} />} text="Users" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </Sidebar>
      </div>
    </div>
  );
};

export default AdminDashboard;
