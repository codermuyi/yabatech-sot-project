import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from './Button'
import { CREATE_LECTURER } from '../lib/api'

const AddLecturerForm = () => {
  const [addLecturer, { data, loading, error }] = useMutation(CREATE_LECTURER)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log('Is adding: ', loading)
  console.log('Uploaded data: ', data)

  async function onSubmit({ name, course, image }) {
    await addLecturer({ variables: { name, course } })
    navigate(0)
  }

  // async function upload() {
  //   const input = document.getElementById('fileUpload')
  //   const file = input.files[0]

  //   const form = new FormData()

  //   form.append('fileUpload', file)

  //   const response = await fetch(`${HYGRAPH_URL}/upload`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${HYGRAPH_ASSET_TOKEN}`,
  //     },
  //     body: form,
  //   })

  //   const data = await response.json()
  //   console.log(JSON.stringify(data, null, 2))
  //   return data
  // }

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-xl m-2 text-center">Enter Lecturer details</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            {...register('name', {
              required: '*Name required',
            })}
          />
          <p className="text-red-500 text-sm">{errors?.name?.message}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="course"
          >
            Course
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="course"
            type="text"
            placeholder="Course"
            {...register('course', {
              required: '*Course required',
            })}
          />
          <p className="text-red-500 text-sm">{errors?.course?.message}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            placeholder="Image"
            {...register('image', {
              // required: '*Image required',
            })}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button className="text-white font-bold text-lg" loading>
            Send
          </Button>
        </div>
      </form>
      <p className="text-red-500">{error && 'Failed to Send'}</p>
    </div>
  )
}

export default AddLecturerForm
