import Button from '../components/Button'

export default function Home() {
  const textStrokeStyle = { WebkitTextStroke: '1px #ffa300' }

  return (
    <main className="bg-secondary">
      <div className="py-10 px-5 grid gap-5 justify-center lg:grid-cols-2 lg:content-center lg:p-20 max-w-[85rem] mx-auto">
        <div className="flex lg:justify-center flex-col order-2 lg:order-1">
          <h1
            className="text-primary text-3xl font-bold text-center py-5 lg:text-left"
            style={textStrokeStyle}
          >
            COMPUTER TECHNOLOGY DEPARTMENT
          </h1>
          <p className="py-5 max-w-2xl text-primary text-center lg:text-left lg:max-w-md">
            Welcome to Computer Technology Department, established in 1989/90
            Session. The Department runs both National Diploma (ND) and Higher
            National Diploma (HND) programme in{' '}
            <span className="text-active">Computer Science</span>.
          </p>
          <Button className="mx-auto lg:m-0" linkType="rel" href="/about">
            Read More...
          </Button>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <img src="/images/home1.svg" alt="" />
        </div>
      </div>
      <div className="py-10 px-5 text-primary lg:grid lg:grid-cols-2 lg:content-center lg:px-20 max-w-[85rem] mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-bold text-3xl text-center pb-5 lg:text-left"
            style={textStrokeStyle}
          >
            Welcome Message
          </h2>
          <p className="">
            The HND programme was accredited in 2000. The Department is one of
            the fastest growing departments in the College in the School of
            Technology. Apart from running both ND and HND programmes, the
            department also offers certificate courses in Information Technology
            and Information Maintenance, which is a short-term course, with well
            experienced and versatile lecturers.
          </p>
          <br />
          <p className="underline">OBJECTIVES</p>
          <p>
            National Diploma (ND) graduates of this programme should be able to:
          </p>
          <ol className="list-decimal p-5">
            <li>Operate Computer systems</li>
            <li>Use various Computer packages</li>
            <li>Maintain hardware</li>
            <li>Solve simple hardware problems</li>
            <li>Use Internet</li>
            <li>Set up Computer Network</li>
            <li>
              Set up and manage an enterprise Computer Based Information System
              (CBIS)
            </li>
            <li>Use various programming languages: QBasic, C, Java...</li>
          </ol>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-10">
          <img
            src="/images/demo-hod.png"
            alt="Head of Department"
            className="w-68"
          />
          <div className="text-center">
            <p className="font-bold">HOD's Desk</p>
            <p>Mr. Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      <div className="bg-third p-5 grid gap-10">
        <div className="flex flex-wrap text-center items-center justify-center gap-5">
          <div className="max-w-[30rem]">
            <div className="flex justify-center p-5">
              <img
                className="w-52"
                src="/images/mission.png"
                alt="Cloud with text 'mission'"
              />
            </div>
            <div className="border-primary border-4 flex flex-col items-center p-3">
              <img src="/images/microscope.svg" alt="" className="h-44 w-44" />
              <p>
                To be the leading IT department by providing training in the
                theory and application of computer science to our students, who
                are empowered to make a positive impact in the society
              </p>
            </div>
          </div>
          <div className="max-w-[30rem]">
            <div className="flex justify-center p-5">
              <img
                className="w-52"
                src="/images/vision.png"
                alt="Cloud with text 'vision'"
              />
            </div>
            <div className="border-primary border-4 flex flex-col items-center p-3">
              <img
                src="/images/vision-signboard.svg"
                alt=""
                className="h-44 w-44"
              />
              <p>
                To produce Computer Science graduate s who are academically
                equipped and capable of applying Computer Science and
                Information Technology in solving real-life problems.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <img className='w-80 border-4 border-active' src="/images/bottom-1.png" alt="" />
          <img className='w-80 border-4 border-active' src="/images/bottom-2.png" alt="" />
          <img className='w-80 border-4 border-active' src="/images/bottom-3.png" alt="" />
        </div>
      </div>
    </main>
  )
}
