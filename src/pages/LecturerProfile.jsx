import { useQuery } from '@apollo/client';

import LecturerCard from '../components/LecturerCard'
import { ALL_LECTURERS } from '../lib/api';
import AddLecturerForm from '../components/AddLecturerForm';

const LecturersProfile = () => {
  const { loading, error, data } = useQuery(ALL_LECTURERS)

  return (
    <main className="bg-secondary p-10">
      <h1 className="text-center text-primary font-bold text-2xl md:text-3xl">
        MEET OUR LECTURERS/DEPARTMENTAL HEADS
      </h1>
      <div className="flex flex-wrap gap-5 max-w-5xl mx-auto my-14 justify-center">
        {data
          ? data.lecturers.map((lecturer, i) => (
              <LecturerCard key={i} data={lecturer} />
            ))
          : 'No Lecturer Detail Yet'}
      </div>
      <AddLecturerForm />
    </main>
  )
}

export default LecturersProfile
