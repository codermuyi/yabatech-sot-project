import srcS from '../assets/image-placeholder.png'

const LecturerCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-center">
      <img
        className="w-60 h-72 object-cover rounded-lg"
        src={data.base64Image || srcS}
        alt={data.name}
      />
      <ul className="p-2 self-center capitalize text-center font-semibold">
        <li>{data.name}</li>
        <li>{data.course}</li>
      </ul>
    </div>
  )
}

export default LecturerCard
