const AdmissionRequirements = () => {
  return (
    <main className="bg-secondary p-10 bg-[url(/logo-bg.png)] bg-[size:80%] bg-[position:center] bg-no-repeat">
      <h1 className="text-center text-primary font-bold text-2xl md:text-3xl mb-10">
        ADMISSION REQUIREMENTS
      </h1>
      <div className="py-10 max-w-2xl mx-auto">
        <h2 className="text-primary font-bold lg:text-xl">NATIONAL DIPLOMA (ND)</h2>
        <table className="min-w-full text-left text-sm lg:text-lg font-light">
          <thead className="border font-medium dark:border-neutral-500">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 border-r border-neutral-500 w-44"
              >
                SSCE/WASSEE REQUIREMENTS
              </th>
              <th scope="col" className="px-4 py-2 w-36 text-center">
                JAMB
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border dark:border-neutral-500">
              <td className="px-4 py-2 font-bold border-r border-neutral-500">
                <p>
                  Five SSCE/GCE/WASC Credits obtained at no more than two
                  sittings to include Physics, Chemistry, English Language, and
                  Mathematics, and any one of:
                </p>
                <ol className="list-decimal ml-5 my-5">
                  <li>Statistics</li>
                  <li>Geography</li>
                  <li>Further Mathematics</li>
                  <li>Economics</li>
                  <li>Computer Science/Data Processing</li>
                  <li>Biology</li>
                  <li>Government</li>
                </ol>
              </td>
              <td className="px-4 py-2 font-bold">
                <p>JAMB Subjects are:</p>
                <ol className="list-decimal ml-5 my-5">
                  <li>English Language</li>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-10 max-w-2xl mx-auto">
        <h2 className="text-primary font-bold lg:text-xl">HIGHER NATIONAL DIPLOMA (HND)</h2>
        <table className="min-w-full text-left text-sm lg:text-lg font-light">
          <thead className="border font-medium dark:border-neutral-500">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 border-r border-neutral-500 w-44"
              >
                SSCE/WASSEE REQUIREMENTS
              </th>
              <th scope="col" className="px-4 py-2 w-36 text-center">
                POST ND REQUIREMENTS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border dark:border-neutral-500">
              <td className="px-4 py-2 font-bold border-r border-neutral-500">
                <p>
                  Five SSCE/GCE/WASC Credits obtained at no more than two
                  sittings to include Physics, Chemistry, English Language, and
                  Mathematics, and any one of:
                </p>
                <ol className="list-decimal ml-5 my-5">
                  <li>Statistics</li>
                  <li>Geography</li>
                  <li>Further Mathematics</li>
                  <li>Economics</li>
                  <li>Computer Science/Data Processing</li>
                  <li>Biology</li>
                  <li>Government</li>
                </ol>
              </td>
              <td className="px-4 py-2 font-bold">
                <p>
                  At least Lower Credit in the National Diploma (ND) in Computer
                  Science Qualifications from Government Accredited Institutions
                  with 1 year Industrial Training.
                </p>
                <br />
                <p>A pass from Yaba Tech Diploma with 2 years Industrial Training.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default AdmissionRequirements
