import srcS from '../assets/Rectangle 137.png'

const LecturerCard = ({data}) => {
  return (
    <div className="flex flex-col justify-center">
      <img className="w-60 h-72 object-cover rounded-lg" src={data.image?.url || srcS} alt={data.name} />
      <ul className="list-disc self-center capitalize">
        <li>{data.name}</li>
        <li>{data.course}</li>
      </ul>
    </div>
  )
}

export default LecturerCard
