import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from './Button'
import { CREATE_LECTURER, ALL_LECTURERS } from '../lib/api'
import { convertToSlug } from '../assets/utils'

const AddLecturerForm = () => {
  const [addLecturer, { data, loading, error }] = useMutation(CREATE_LECTURER, {
    refetchQueries: () => [
      {
        query: ALL_LECTURERS,
      },
    ],
  })
  const navigate = useNavigate()
  const [base64, setBase64] = useState('')
  const [isSelectingFile, setIsSelectingFile] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function onSubmit({ name, course, qualification, specialization }) {
    await addLecturer({
      variables: {
        name,
        course,
        base64Image: base64,
        qualification,
        specialization,
        slug: convertToSlug(name),
      },
    })
    navigate('/lecturer-profile')
  }

  function handleFileChange(e) {
    const file = e.target.files[0]

    if (!file.type.includes('image')) {
      alert('Selected file is not an image!')
      e.target.value = ''
      return
    }
    if (file.size > 2097152) {
      alert('File is too big!')
      e.target.value = ''
      return
    }

    const reader = new FileReader()
    setIsSelectingFile(true)

    reader.onloadend = () => {
      setIsSelectingFile(false)
      setBase64(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-xl m-2 text-center">Enter Lecturer details</p>
        <p>Picture file size should not exceed 2MB</p>
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
            onInput={handleFileChange}
            {...register('image', {
              required: '*Picture required',
            })}
          />
          <p className="text-red-500 text-sm">{errors?.image?.message}</p>
          <p>{isSelectingFile && 'Selecting file...'}</p>
          {base64 && (
            <img
              className="w-32 p-2"
              src={base64}
              alt="Preview of selected image"
            />
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qualification"
          >
            Qualifications
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="qualification"
            type="text"
            placeholder="Qualifications"
            {...register('qualification', {
              required: '*Qualifications required',
            })}
          />
          <p className="text-red-500 text-sm">{errors?.name?.message}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="specialization"
          >
            Area of specialization
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="specialization"
            type="text"
            placeholder="Specialization"
            {...register('specialization', {
              required: '*Specialization required',
            })}
          />
          <p className="text-red-500 text-sm">{errors?.name?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <Button className="text-white font-bold text-lg" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>
      <p className="text-red-500">{error && error.meesage}</p>
    </div>
  )
}

export default AddLecturerForm
