import Button from './Button'

const Sidebar = ({ isOpen, toggle, children, setIsOpen }) => {
  return (
    <div
      className={`bg-white fixed top-0 bottom-0 right-0 z-[1000] overflow-hidden lg:hidden ${
        isOpen ? 'w-72 p-2' : 'w-0'
      }`}
    >
      <Button
        ariaLabel="Close sidebar"
        onClick={toggle}
        className="w-14 float-right"
      >
        X
      </Button>
      <div className="grid gap-3 mt-20 px-4">
        {children}
        <br />
        <Button
          linkType="rel"
          href="/contact"
          className="text-white"
          center
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
