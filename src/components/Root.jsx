import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from './Footer'
import ScrollToTop from "./ScrollToTop"

const Root = () => {
  return (
    <>
      <Navigation />
      <div className="mt-14 lg:mt-16">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Root
