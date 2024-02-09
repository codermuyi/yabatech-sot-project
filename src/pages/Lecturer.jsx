import Button from '../components/Button'

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { GET_LECTURER } from '../lib/api'

const Lecturer = () => {
  const { slug } = useParams()
  const { loading, error, data } = useQuery(GET_LECTURER, {
    variables: { slug },
  })

  console.log('Loading => ', loading)
  console.log('Error => ', error)

  return (
    <main className="bg-secondary p-10 bg-[url(/logo-bg.png)] bg-[size:80%] bg-[position:center] min-h-[80vh]">
      {!loading ? (
        <div className="my-10 md:grid md:grid-cols-2 md:items-center md:justify-center max-w-3xl mx-auto">
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
            <p className="grid gap-3">
              <span className="font-bold">Qualifications</span>
              <span>{data.lecturer.qualification}</span>
            </p>
            <p className="grid gap-3">
              <span className="font-bold">Specialization</span>
              <span>{data.lecturer.specialization}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="p-56 text-center h-screen text-xl">Loading...</div>
      )}
    </main>
  )
}

export default Lecturer
