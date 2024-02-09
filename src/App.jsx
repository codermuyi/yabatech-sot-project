import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'

import Root from './components/Root'
import Home from './pages/Home';
import About from './pages/About';
import LecturerProfile from './pages/LecturerProfile'
import Courses from './pages/Courses'
import AdmissionRequirements from './pages/AdmissionRequirements'
import ErrorPage from './pages/ErrorPage'
import ContactUs from './pages/ContactUs';
import EnterLecturerDetail from './pages/EnterLecturerDetail';
import Lecturer from './pages/Lecturer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lecturer-profile" element={<LecturerProfile />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/admission-requirements" element={<AdmissionRequirements />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/enter-lecturer" element={<EnterLecturerDetail />} />
      <Route path="/lecturer/:slug" action={({ params }) => {}} element={<Lecturer />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
