import Link from "next/link";
import Icon from "@mdi/react";
import { mdiPhone, mdiFaceManProfile, mdiFaceMan } from "@mdi/js";

const team_members = [
  { name: 'Jane Doe', position: 'Position held' },
  { name: 'Jane Doe', position: 'Position held' },
  { name: 'Jane Doe', position: 'Position held' },
  { name: 'John Doe', position: 'Position held' }
]
export default function Page() {
  return (
    <main className="bg-white text-slate-700">
      <section id="header-text" className="text-center p-10 bg-gray-200 text-black">
        <h1 className="text-5xl font-medium">About us</h1>
        <p className="text-lg text-slate-700">
          Health & Safety Solutions within the workplace.
        </p>
      </section>

      <section className="grid md:grid-cols-2 grid-cols-1 gap-2 my-4">
        <div className="md:p-10 p-5 flex flex-col gap-y-4 border-black md:border-x">
          <p className="text-base">
            At Inventum we care about the safety and well being of your employees.
            With our dedicated team of Occupational Health & Safety professionals 
            replete with  knowledge  we ensure quick, comprehensive and convenient
            assessments.
          </p>

          <p className="text-base">
            We specialize in pre-employment, exit and periodic medical examinations and provide
            health and safety solutions for all industry types. No matter how big or small your 
            business is. We will drive operational efficiencies and get better visibility so you
            can protect your employees, ensuring your business Health & Safety compliance and 
            reduce risks, maintain medical exams programme and adding value to your business.
          </p>

          <p className="text-base">
            As part of our commitment, we offer these services no matter where your company is
            located. Our highly qualified occupational medical practitioners, with a world-class
            mobile unit comes to your site. This saves you time and provide the desired results
            by professionally completing the essential tests as required by law. 
          </p>
        </div>
        <div className="border-black border-t md:border-none md:p-10 p-5 flex flex-col gap-y-4">
          <p className="text-base">
            Our focus is providing individualized solutions to ensure that your employee - prospective 
            or current – is mentally, physically and medically fit for their job which reduces costs and
            downtime, keeps people safe and increases their well-being and productivity.
          </p>

          <p className="text-base">
            Our in-depth medicals are tailored to your industry type, in line with applicable legislation
            consist of:
          </p>

          <ul className="list-disc mx-7">
            <li>Physical Examination</li>
            <li>Audiometric Testing</li>
            <li>Spirometry Testing</li>
            <li>Food handler tests</li>
            <li>Vision screening</li>
            <li>Chest X-rays</li>
          </ul>
          <p className="text-base">
            After the completion of all medicals, each client will receive a medical report with the
            certificates of fitness "red card" which also contains feedback, recommendations and relevant
            data to each individual.
          </p>

          <p className="text-base">
            Let us help you to get legally compliant!
          </p>


          <Link href='tel:+263776409817' className="flex items-center gap-x-1 w-fit p-2 text-white bg-blue-700 rounded">
            <Icon className="transform rotate-270" path={mdiPhone} size={1} color="currentColor" />
            Contact us now
          </Link>
        </div>
      </section>

      {/* <section id="our-team" className="text-black bg-gray-200 py-10 text-base">
        <div className="grid-cols-1 p-5 md:p-10 grid md:grid-cols-2 gap-2">
          <div className="col-span-1 my-auto h-fit">
            <h1 className="text-3xl font-medium">
              Meet our team
            </h1>
            <p className="text-slate-700 text-base w-4/5">
              We’re a dynamic group of individuals who are
              passionate about what we do and dedicated 
              to delivering the best results for our clients.
            </p>
          </div>

          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-2">
            {
              team_members.map((member, index) => (
                <div key={index} className="p-2 border border-gray-100 bg-gray-100 hover:bg-slate-200 duration-300 rounded-md col-span-1 flex flex-row gap-x-3">
                  <span className="flex items-center justify-center w-[5em] h-[5em] rounded-full text-white bg-blue-700 rounded">
                    <Icon className="transform rotate-270" path={mdiFaceMan} size={2} color="currentColor" />
                  </span>
                  <div className="p-2 w-[75%]">
                    <h1 className="text-2xl font-medium">{ member.name }</h1>
                    <p className="text-base text-slate-700">{ member.position }</p>
                  </div>  
                </div>
              ))
            }
          </div>
        </div>
      </section> */}

      <section id="join-us" className="mx-auto pt-[3em] pb-10 gap-y-1 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-4 w-4/5">
          <span className="font-light">Want to join us?, </span>
          Send an email with your resume and cover letter.
        </h1>

        <Link href='mailto:inventumzim@gmail.com' className="flex items-center gap-x-1 w-fit py-2 px-4 text-white bg-blue-700 rounded">
          <Icon className="transform rotate-270" path={mdiPhone} size={1} color="currentColor" />
          Email us
        </Link>
      </section>
    </main>
  )
}