import React from 'react'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import NavItemsUser from '../components/userC/NavItemsUser';
import { MobileSidebarUser } from '../components/index';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebarUser />
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItemsUser />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  )
}

export default UserLayout
