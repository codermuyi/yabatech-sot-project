export default function About() {
  return (
    <main className="bg-bluey">
      <div className="py-36 flex justify-center items-center bg-[url(/images/computers-on-desk.png)] bg-[size:cover] bg-[position:center] relative">
        <div className="bg-black/60 absolute inset-0" />
        <div className="absolute">
          <h1 className="text-4xl text-active font-bold">About Us</h1>
        </div>
        <div className="absolute right-0 bottom-0 text-white text-center w-48 text-xs p-4 mr-10">
          <p>
            &quot;The technology you use impresses no one. The experience you
            create with it is everything&quot;
          </p>
          <br />
          <p>&minus; Sean Gerety </p>
        </div>
      </div>
      <div className="text-primary py-10">
        <div className="p-10 max-w-5xl mx-auto">
          <p>
            Welcome to Computer Technology Department, established in 1989/90
            Session. The Department runs both National Diploma (ND) and Higher
            National Diploma (HND) programme in Computer Science. The HND
            programme was accredited in 2000. The Department is one of the
            fastest growing departments in the College in the School of
            Technology. Apart from running both ND and HND programmes, the
            department also offers certificate courses in Information Technology
            and Information Maintenance, which is a short-term course, with well
            experienced and versatile lecturers.
          </p>
          <p className="py-4">VISION STATEMENT</p>
          <p>
            To be the leading IT department by providing training in the theory
            and application of computer science to our students, who are
            empowered to make a positive impact in the society.
          </p>
          <p className="py-4">MISSION STATEMENT</p>
          <p>
            To produce Computer Science graduates, worthy in skill and
            character, who are academically equipped and capable of applying
            Computer Science and Information Technology in solving problems
            societal problem.
          </p>
          <p className="py-4">OBJECTIVES</p>
          <div>
            <p className="mb-5">
              National Diploma (ND) graduates of this programme should be able
              to:
            </p>
            <ol className="list-decimal ml-5 mb-5">
              <li>Operate Computer systems</li>
              <li>Use various Computer packages</li>
              <li>Maintain hardware</li>
              <li>Solve simple hardware problems</li>
              <li>Use Internet</li>
              <li>Set up Computer Network</li>
              <li>
                Set up and manage an enterprise Computer Based Information
                System (CBIS)
              </li>
              <li>
                Use various programming languages:
                <ul className="list-disc ml-5">
                  <li>Visual BASIC</li>
                  <li>JAVA</li>
                  <li>C Programming</li>
                  <li>Unified Modelling Language (UML)</li>
                  <li>Hyper Text Mark-up Language</li>
                </ul>
              </li>
            </ol>
          </div>
          <div>
            <p className="mb-5">
              Higher National Diploma (HND) graduates of this programme should
              be able to:
            </p>
            <ol className="list-decimal ml-5 mb-5">
              <li>Manage and optimise Operating Systems</li>
              <li>Design and implement programs for solving problems</li>
              <li>Manage computer installations and ICT centres</li>
              <li>Troubleshoot Computer Installations.</li>
              <li>Carry out routine maintenance of Computer facilities</li>
              <li>Setup and manage Network Systems</li>
              <li>Design and manage Database systems</li>
              <li>Expand Business Enterprise</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
