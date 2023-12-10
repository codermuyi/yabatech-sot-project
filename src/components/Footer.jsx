import Button from './Button'

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
    <div className='bg-[#505050] p-5 text-white grid gap-10'>
      <div className="flex">
        {social.map((v, i) => (
          <a key={i} href={v.link} aria-label={v.name}>
            <img src={v.icon} alt={v.name} />
          </a>
        ))}
      </div>
      <div>
        <p className='uppercase text-3xl'>Contact Us</p>
        <form action="" className="flex">
          <img src="" alt="Yabatech icon" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Subscribe to email updates"
          />
          <Button>Submit</Button>
        </form>
      </div>
      <div></div>
      <p>
        Yaba College Of Technology: Copyright 2023. Computer Science Students
        Project.
      </p>
    </div>
  )
}

export default Footer
