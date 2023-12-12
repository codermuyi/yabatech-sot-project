import Button from '../components/Button'

import locationSrc from '../assets/location.png'
import contactSrc from '../assets/contact.png'
import emailSrc from '../assets/email.png'

export default function ContactUs() {
  return (
    <main className="bg-secondary overflow-hidden">
      <div className="p-56 bg-[url(/images/contact-1.png)] bg-[size:cover] bg-[position:center] relative overflow-hidden">
        <img
          className="absolute right-10 bottom-0"
          src="/images/contact-2.png"
          alt="A man on a call"
        />
      </div>
      <div className="p-10 py-16 bg-[url(/images/contact-3.png)] bg-[size:cover] bg-[position:center] text-primary">
        <p className="text-center text-2xl">
          You can reach us through the following, or via the form below:
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="max-w-xs flex flex-col items-center">
            <img className="w-52 h-52" src={locationSrc} alt="Location Icon" />
            <p>
              Herbert Macaulay Road, Opposite WAEC office, Yaba Lagos.P.M.B
              2011,YABA, LAGOS. NIGERIA.
            </p>
          </div>
          <div className="max-w-xs flex flex-col items-center">
            <img className="w-52 h-52" src={contactSrc} alt="Contact Icon" />
            <p>Phone number: +234-7037431055</p>
          </div>
          <div className="max-w-xs flex flex-col items-center">
            <img className="w-52 h-52" src={emailSrc} alt="Email Icon" />
            <p>Email: registrar@yabatech.edu.ng</p>
          </div>
        </div>
        <div className="my-20">
          <p className="text-center text-2xl">Send us a message</p>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 max-w-xl mx-auto">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone_number"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone_number"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone_number"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <Button className="text-white font-bold text-lg">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
