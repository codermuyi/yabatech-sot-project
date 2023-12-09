import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'

import Root from './components/Root'
import Home from './pages/Home';
import About from './pages/About';
import LecturerProfile from './pages/LecturerProfile'
import Courses from './pages/Courses'
import AdmissionRequirements from './pages/AdmissionRequirements'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="lecturer-profile" element={<LecturerProfile />} />
      <Route path="courses" element={<Courses />} />
      <Route path="admission-requirements" element={<AdmissionRequirements />} />
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
