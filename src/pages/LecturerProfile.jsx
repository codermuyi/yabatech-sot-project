import { useQuery } from '@apollo/client'

import LecturerCard from '../components/LecturerCard'
import Button from '../components/Button'
import { ALL_LECTURERS } from '../lib/api'

const LecturersProfile = () => {
  const { loading, error, data } = useQuery(ALL_LECTURERS)

  const content = () => {
    if (loading) return 'Loading...'
    if (error) return error.message || 'An error occurred while loading.'
    if (data?.lecturers?.length > 0)
      return data?.lecturers.map((lecturer, i) => (
        <LecturerCard key={i} data={lecturer} />
      ))
    else return 'No lecturer found.'
  }

  return (
    <main className="bg-secondary p-10">
      <h1 className="text-center text-primary font-bold text-2xl md:text-3xl">
        MEET OUR LECTURERS/DEPARTMENTAL HEADS
      </h1>
      <div className="flex flex-wrap gap-5 max-w-5xl mx-auto my-14 justify-center">
        {content()}
      </div>
      <div className="flex justify-center">
        <Button linkType="rel" href="/enter-lecturer">
          Add Lecturer
        </Button>
      </div>
    </main>
  )
}

export default LecturersProfile
