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
      <div className='md:hidden'>
        <button onClick={() => console.log('Clicked')}>
          <img src={hamburger} width='30' height='30' />
        </button>
      </div>
      <div className='hidden md:block'>
      </div>
    </div>
  )
}

export default Navbar
