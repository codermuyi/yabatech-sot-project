import CourseTable from '../components/CourseTable'

import courseData from '../assets/course-data.json'

const CourseTableList = ({ program }) => {
  const data = courseData.programs[program]

  if (program === 'fulltime')
    return (
      <>
        <CourseTable
          title="FIRST SEMESTER COURSES: ND1 FULL-TIME"
          type="nd"
          data={data.nd1.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: ND1 FULL-TIME "
          type="nd"
          data={data.nd1.second}
        />
        <CourseTable
          title="FIRST SEMESTER COURSES: ND2 FULL-TIME"
          type="nd"
          data={data.nd2.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: ND2 FULL-TIME"
          type="nd"
          data={data.nd2.second}
        />
        <CourseTable
          title="FIRST SEMESTER COURSES: HND1 FULL-TIME"
          type="hnd"
          data={data.hnd1.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: HND1 FULL-TIME"
          type="hnd"
          data={data.hnd1.second}
        />
        <CourseTable
          title="FIRST SEMESTER COURSES: HND2 FULL-TIME"
          type="hnd"
          data={data.hnd2.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: HND2 FULL-TIME"
          type="hnd"
          data={data.hnd2.second}
        />
      </>
    )
  if (program === 'parttime')
    return (
      <>
        <CourseTable
          title="FIRST SEMESTER COURSES: HND1 PART-TIME"
          type="hnd"
          data={data.hnd1.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: HND1 PART-TIME"
          type="hnd"
          data={data.hnd1.second}
        />
        <CourseTable
          title="FIRST SEMESTER COURSES: HND2 PART-TIME"
          type="hnd"
          data={data.hnd2.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: HND2 PART-TIME"
          type="hnd"
          data={data.hnd2.second}
        />
        <CourseTable
          title="FIRST SEMESTER COURSES: HND3 PART-TIME"
          type="hnd"
          data={data.hnd3.first}
        />
        <CourseTable
          title="SECOND SEMESTER COURSES: HND3 PART-TIME"
          type="hnd"
          data={data.hnd3.second}
        />
      </>
    )
}

export default CourseTableList
