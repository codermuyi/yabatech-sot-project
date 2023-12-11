import { useState } from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

import { navLinks } from '../assets/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen((prev) => !prev)

  const overlayClassName = cn('fixed inset-0 ', {
    'z-1 bg-black/30': isOpen === true,
    'z-[-1] transparent': isOpen === false,
  })

  const links = navLinks.map((link, i) => (
    <NavLink
      key={i}
      to={link.link}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) => [
        'hover:bg-active/30 p-2 transition rounded text-sm',
        isActive ? 'text-active border-b-4 border-active' : ''
      ].join(' ')}
    >
      {link.text}
    </NavLink>
  ))

  return (
    <>
      <Sidebar toggle={toggleSidebar} isOpen={isOpen}>
        {links}
      </Sidebar>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isOpen}>
        {links}
      </Navbar>
      <div className={overlayClassName} onClick={toggleSidebar} />
    </>
  )
}

export default Navigation
