import { Link } from 'react-router-dom'

import Button from './Button'

import hamburger from '../assets/hamburger.svg'

const Navbar = ({ toggleSidebar, children }) => {
  return (
    <div className="flex justify-between items-center bg-bluey p-2">
      <div className="flex gap-2">
        <Link to="/">
          <img src="/logo.svg" alt="Yabatech Logo" width="40" height="40" />
        </Link>
        <div className="grid items-center">
          <span className="text-primary font-bold">
            Yaba College of Technology
          </span>
          <span className="text-xs">P.M.B 2011,YABA, LAGOS. NIGERIA.</span>
        </div>
      </div>
      <div className="lg:hidden">
        <Button onClick={toggleSidebar} className="p-1 w-14">
          <img src={hamburger} width="30" height="30" />
        </Button>
      </div>
      <div className="hidden px-3 lg:flex gap-4 items-center">
        {children}
        <br />
        <br />
        <Button linkType="rel" href="/contact">
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default Navbar
