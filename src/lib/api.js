import { gql } from '@apollo/client'

export const ALL_LECTURERS = gql`
  query {
    lecturers(stage: DRAFT) {
      name
      course
      image {
        url
      }
    }
  }
`

export const CREATE_LECTURER = gql`
  mutation CreateLecturer($name: String!, $course: String!) {
    createLecturer(data: { name: $name, course: $course }) {
      id
      name
      course
    }
  }
`
