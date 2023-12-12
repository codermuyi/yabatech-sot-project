import { useState } from 'react'
import cn from 'classnames'

import Button from '../components/Button'
import CourseTableList from './CourseTableList'

const Programs = () => {
  const [program, setProgram] = useState('fulltime')

  function ccn(p) {
    return cn('w-full p-7 uppercase font-bold bg-transparent text-[#878080]', {
      'bg-primary text-[#FFE8E8]': program === p,
    })
  }

  return (
    <div>
      <div className="rounded-lg border border-primary max-w-lg mx-auto my-10 grid grid-cols-2">
        <Button
          className={ccn('fulltime')}
          onClick={() => setProgram('fulltime')}
        >
          Full Time Courses
        </Button>
        <Button
          className={ccn('parttime')}
          onClick={() => setProgram('parttime')}
        >
          Part Time Courses
        </Button>
      </div>
      <CourseTableList program={program} />
      <br />
    </div>
  )
}

export default Programs
