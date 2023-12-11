import { Link } from 'react-router-dom'

import Button from './Button'
import { navLinks } from '../assets/utils'

import twitterHref from '../assets/twitter.png'
import facebookHref from '../assets/facebook.svg'
import instaHref from '../assets/instagram.svg'
import linkedinHref from '../assets/linkedin.svg'

const social = [
  {
    name: 'Twitter',
    link: '',
    icon: twitterHref,
  },
  {
    name: 'Facebook',
    link: '',
    icon: facebookHref,
  },
  {
    name: 'Instagram',
    link: '',
    icon: instaHref,
  },
  {
    name: 'LinkedIn',
    link: '',
    icon: linkedinHref,
  },
]

const Footer = () => {
  return (
    <div className="bg-[#505050] p-5 text-white grid gap-10 grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] justify-center lg:py-10">
      <div className="flex justify-center self-end">
        {social.map((v, i) => (
          <a key={i} href={v.link} aria-label={v.name}>
            <img src={v.icon} alt={v.name} />
          </a>
        ))}
      </div>
      <div className="max-w-xl mx-auto my-5">
        <p className="uppercase text-3xl text-center mb-5 lg:mb-14">Contact Us</p>
        <form action="" className="flex gap-3">
          <img src="/logo.svg" alt="Yabatech icon" width={40} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Subscribe to email updates"
            className="w-full h-12 p-3 bg-transparent border-b border-gray-500"
          />
          <Button className="bg-green-700 w-72 p-1 h-12">Submit</Button>
        </form>
      </div>
      <div>
        <p className="text-3xl text-center my-5">Quick Links</p>
        <div className='grid gap-3 text-center'>
          {navLinks.map((v, i) => (
            <Link key={i} className='' href={v.link}>{v.text}</Link>
          ))}{' '}
        </div>
      </div>
      <p className='col-span-full text-center text-sm'>
        Yaba College Of Technology: Copyright 2023. Computer Science Students
        Project.
      </p>
    </div>
  )
}

export default Footer
