import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from './Footer'
import ScrollToTop from "./ScrollToTop"

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Root
