import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import NavItemsAdmin from './NavItemsAdmin'

const MobileSidebarAdmin = () => {
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.toggle()
    }
  }

  return (
    <div className='mobile-sidebar wrapper'>
      <header>
        <Link to="/">
          <img 
            src='/icons/logo.svg'
            alt="Logo"
            className='size-[30px]'
          /> 
          <h1>Trip & Bhojan</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src='/icons/menu.svg' alt="menu" className='size-7'/>
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={sidebarRef}
        created={() => sidebarRef.current && sidebarRef.current.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type='over'
      >
        <NavItemsAdmin handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  )
}

export default MobileSidebarAdmin
