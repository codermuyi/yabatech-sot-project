const CourseTable = ({ title, type, data }) => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto font-bold mt-5">
      <h2 className="uppercase font-bold text-primary text-center my-2">
        {title}
      </h2>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {(() => {
              if (type === 'nd') return <NDTable data={data} />
              if (type === 'hnd') return <HNDTable data={data} />
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}

const NDTable = ({ data }) => {
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border font-medium dark:border-neutral-500 text-lg">
        <tr>
          <th
            scope="col"
            className="px-4 py-2 border-r border-neutral-500 w-44"
          >
            COURSE CODE
          </th>
          <th scope="col" className="px-4 py-2 border-r border-neutral-500">
            COURSE TITLE
          </th>
          <th scope="col" className="px-4 py-2 w-36 text-center">
            CATEGORY
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key} className="border dark:border-neutral-500 font-bold">
            <td className="whitespace-nowrap px-4 py-2 border-r border-neutral-500">
              {item.code}
            </td>
            <td className="whitespace-nowrap px-4 py-2  border-r border-neutral-500">
              {item.title}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center">
              {item.category}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const HNDTable = ({ data }) => {
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border font-medium dark:border-neutral-500 text-lg">
        <tr>
          <th
            scope="col"
            className="px-4 py-2 border-r border-neutral-500 w-44"
          >
            COURSE CODE
          </th>
          <th scope="col" className="px-4 py-2 border-r border-neutral-500">
            COURSE TITLE
          </th>
          <th scope="col" className="px-4 py-2 border-r border-neutral-500">
            T
          </th>
          <th scope="col" className="px-4 py-2 border-r border-neutral-500">
            P
          </th>
          <th scope="col" className="px-4 py-2 border-r border-neutral-500">
            U
          </th>
          <th scope="col" className="px-4 py-2 w-36 text-center">
            CATEGORY
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key} className="border dark:border-neutral-500 font-bold">
            <td className="whitespace-nowrap px-4 py-2 border-r border-neutral-500">
              {item.code}
            </td>
            <td className="whitespace-nowrap px-4 py-2  border-r border-neutral-500">
              {item.title}
            </td>
            <td className="whitespace-nowrap px-4 py-2  border-r border-neutral-500">
              {item.T ? item.T : '-'}
            </td>
            <td className="whitespace-nowrap px-4 py-2  border-r border-neutral-500">
              {item.P ? item.P : '-'}
            </td>
            <td className="whitespace-nowrap px-4 py-2  border-r border-neutral-500">
              {item.U ? item.U : '-'}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center">{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CourseTable

// Helpful source: https://tw-elements.com/docs/standard/data/tables/
