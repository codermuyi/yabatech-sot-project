import { useRouteError } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div id="error-page" className='flex flex-col gap-5 px-3 py-72 text-center h-screen bg-secondary'>
        <h1 className='text-5xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
      </div>
      <Footer />
    </>
  );
}
