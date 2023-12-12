import { lecturers } from "../assets/utils"
import LecturerCard from "../components/LecturerCard"

const LecturersProfile = () => {
  return (
    <main className="bg-secondary p-10">
      <h1 className='text-center text-primary font-bold text-2xl md:text-3xl'>MEET OUR LECTURERS/DEPARTMENTAL HEADS</h1>
      <div className="flex flex-wrap gap-5 max-w-5xl mx-auto my-14 justify-center">
        {lecturers.map((lecturer, i) => <LecturerCard key={i} data={lecturer} />)}
      </div>
    </main>
  )
}

export default LecturersProfile
