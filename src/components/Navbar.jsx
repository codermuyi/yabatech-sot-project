import { Link } from "react-router-dom"
import hamburger from '../assets/hamburger.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#E9EFFF] p-2">
      <div className="flex gap-2">
        <Link to='/'>
          <img src="/logo.svg" alt="Yabatech Logo" width='40' height='40' />
        </Link>
        <div className="grid items-center">
          <span className='text-primary font-bold'>Yaba College of Technology</span>
          <span className='text-xs'>P.M.B 2011,YABA, LAGOS. NIGERIA.</span>
        </div>
      </div>
      <div className='hidden md:block'>
        <img src={hamburger} width='30' height='30' />
      </div>
      <div className='md:hidden'>

      </div>
    </div>
  )
}

export default Navbar
