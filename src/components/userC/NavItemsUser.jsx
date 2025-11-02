import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sidebarItemsUser } from '../index'
import { cn } from '../../../lib/utils'

const NavItemsUser = ({ handleClick }) => {
  const user = {
    name: 'Patil',
    email: 'ranjitppatil10@gmail.com',
    imageUrl: '/images/david.webp'
  }

  return (
    <section className='nav-items'>
      <Link to="/" className='link-logo'>
        <img src="/icons/logo.svg" alt="logo" className='size-[30px]' />
        <h1>Trip & Bhojan</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItemsUser.map(({ id, href, icon, label }) => (
            <NavLink
              to={href}
              key={id}
              className={({ isActive }) =>
                cn(
                  "group nav-item",
                  isActive && "bg-primary-100 text-white!"
                )
              }
              onClick={handleClick}
            >
              {({ isActive }) => (
                <div className="flex items-center gap-2">
                  <img
                    src={icon}
                    alt={label}
                    className={cn(
                      "size-[22px] transition-all group-hover:brightness-0 group-hover:invert",
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    )}
                  />
                  <span>{label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className='nav-footer'>
          <img src={user.imageUrl || '/images/david.webp'} alt={user.name || 'Ranjit'} />
          <article>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </article>

          <button
            onClick={() => {
              console.log("logout")
            }}
            className='cursor-pointer'
          >
            <img 
              src="/icons/logout.svg"
              alt='logout'
              className='size-6'
            />
          </button>
        </footer>
      </div>
    </section>
  )
}

export default NavItemsUser
