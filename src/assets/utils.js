export const navLinks = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Lecturers Profile',
    link: '/lecturer-profile',
  },
  {
    text: 'Courses',
    link: '/courses',
  },
  {
    text: 'Admission Requirements',
    link: '/admission-requirements',
  },
]

export function convertToSlug(text) {
  return text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
