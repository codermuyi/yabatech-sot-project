import { gql } from '@apollo/client'

export const ALL_LECTURERS = gql`
  query {
    lecturers(stage: DRAFT) {
      name
      course
      base64Image
      slug
    }
  }
`

export const CREATE_LECTURER = gql`
  mutation CreateLecturer($name: String!, $course: String!, $base64Image: String!) {
    createLecturer(data: { name: $name, course: $course, base64Image: $base64Image }) {
      id
      name
      course
      base64Image
    }
  }
`

export const GET_LECTURER = gql`
  query ($slug: String!) {
    lecturer(stage: DRAFT, where: {slug: $slug}) {
      name
      course
      base64Image
      qualification
      specialization
    }
  }
`