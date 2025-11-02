import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { NavItemsAdmin } from "../components/index"
import { MobileSidebarAdmin } from "../components/index"

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebarAdmin />
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItemsAdmin />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
