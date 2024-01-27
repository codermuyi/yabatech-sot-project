import Button from '../components/Button'

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { GET_LECTURER } from '../lib/api'

const Lecturer = ({ match }) => {
  const { slug } = useParams()
  const { loading, error, data } = useQuery(GET_LECTURER, {
    variables: { slug },
  })

  console.log(data?.lecturer)

  if (data)
    return (
      <main className="bg-secondary p-10 flex flex-col">
        <div className="grid justify-center gap-5">
          <img
            src={data.lecturer.base64Image}
            alt={data.lecturer.name}
            className="w-72 h-96 object-cover rounded-md"
          />
          <h1 className="text-center text-primary font-bold text-2xl md:text-3xl">
            {data.lecturer.name}
          </h1>
        </div>
        <div className="grid gap-5 max-w-5xl mx-auto my-14 justify-center">
          <p>Qualifications: {data.lecturer.qualification}</p>
          <p>Specialization: {data.lecturer.specialization}</p>
        </div>
      </main>
    )
}

export default Lecturer
