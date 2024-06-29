import Image from "next/image"
import Link from "next/link"
import { mdiPhone } from "@mdi/js"
import Icon from "@mdi/react"

export default function Page() {
  
  return (
    <main className="text-black bg-white">
      <section id="mobile-health"className="text-white p-5 md:p-10 bg-blue-700 grid md:grid-cols-2 gap-2">
        <div className="w-full h-fit my-auto flex flex-col">
          <h1 className="text-3xl font-bold mb-2">
            Mobile Occupational Health & Safety Services
          </h1>
          <p className="text-base">
            Our mobile unit is ready to bring you exceptional services. Risk based medicals
            assessments available for various occupations, in accordance to the risk profile
            that is in line with applicable legislation.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            priority={true}
            className="rounded-md lg:w-4/5 shadow-lg hover:scale-95 duration-300"
            src='/mobile-unit.webp'
            width={640}
            height={360}
            alt="Mobile unit van image"
          />
        </div>
      </section>

      <section id="medical-certificate" className="p-5 md:p-10">
        <div className="w-full mb-8">
          <h1 className="text-3xl">
            Medical Fitness Certificate
          </h1>

          <p className="text-base text-slate-700 md:w-1/2">
            We offer medical certificates to our clients upon performing a series of tests
            outlined below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Audiometric test */}
          <div className="rounded-lg shadow-xl shadow-outline hover:scale-95 duration-300 hover:bg-blue-200 grid border grid-cols-5 gap-x-2">
            <div className="col-span-2 w-full rounded-lg">
              <Image
                priority={true}
                className="rounded-l-lg"
                src='/AudiometricTesting.webp'
                width={640}
                height={360}
                alt="Audiometric testing headphones"
              />
            </div>
            <div className="col-span-3 p-2 h-fit my-auto">
              <h2 className="text-xl font-medium mb-1">Audiometric test</h2>
              <p className="text-sm text-slate-700 mb-2">
                We provide comprehensive testing to identify and assess 
                hearing loss that might have occurred from noise exposure in the workplace.
              </p>
            </div>
          </div>
          
          {/* Vision Screening */}
          <div className="rounded-lg shadow-xl shadow-outline hover:scale-95 duration-300 hover:bg-slate-200 grid border grid-cols-5 gap-x-2">
            <div className="col-span-2 h-fit w-full rounded-lg">
              <Image
                priority={true}
                className="rounded-l-lg"
                src='/vision_screening.webp'
                width={640}
                height={360}
                alt="Vision Screening equipment"
              />
            </div>
            <div className="col-span-3 p-2 h-fit my-auto">
              <h2 className="text-xl font-medium mb-1">Vision Screening</h2>
              <p className="text-sm text-slate-700 mb-2">
                We offer efficient tests to identify any visual impairments or early signs of
                undetected health issues, ensuring your employees' safety and well-being
              </p>
            </div>
          </div>

          {/* Lung Function / Spirometric Test */}
          <div className="rounded-lg shadow-xl shadow-outline hover:scale-95 duration-300 hover:bg-yellow-200 grid border grid-cols-5 gap-x-2">
            <div className="col-span-2 h-fit w-full rounded-lg">
              <Image
                priority={true}
                className="rounded-l-lg"
                src='/spirometric_test.webp'
                width={640}
                height={360}
                alt="Spirometric testing equipment"
              />
            </div>
            <div className="col-span-3 p-2 h-fit my-auto">
              <h2 className="text-xl font-medium mb-1">Lung Function / Spirometric Test</h2>
              <p className="text-sm text-slate-700 mb-2">
                We offer non-invasive spirometry testing to evaluate workers' lung
                function and detect early signs of respiratory issues. 
              </p>
            </div>
          </div>

          {/* X-ray Scans */}
          <div className="rounded-lg shadow-xl shadow-outline hover:scale-95 duration-300 hover:bg-blue-400 grid border grid-cols-5 gap-x-2">
            <div className="col-span-2 h-fit w-full rounded-lg">
              <Image
                priority={true}
                className="rounded-l-lg"
                src='/xray_scan.png'
                width={640}
                height={360}
                alt="X-ray Scan image"
              />
            </div>
            <div className="col-span-3 p-2 h-fit my-auto">
              <h2 className="text-xl font-medium mb-1">X-ray Scans</h2>
              <p className="text-sm text-slate-700 mb-2">
                These scans are crucial for quickly assessing and managing musculoskeletal
                issues, revealing sustained injuries and health conditions.
              </p>
            </div>
          </div>

          {/* Drug Tests */}
          <div className="rounded-lg h-it shadow-xl shadow-outline hover:scale-95 duration-300 hover:bg-sky-200 grid border grid-cols-5 gap-x-2">
            <div className="col-span-2 h-full w-full rounded-lg">
              <Image
                priority={true}
                className="rounded-l-lg h-full"
                src='/drug_test.png'
                width={640}
                height={360}
                alt="Drug Testing image"
              />
            </div>
            <div className="col-span-3 p-2 h-fit my-auto">
              <h2 className="text-xl font-medium mb-1">Drug Tests</h2>
              <p className="text-sm text-slate-700 mb-2">
                We offer pre-employment screenings, random testing programs, and post-incident tests
                to detect substance use and maintain workplace safety standards.
              </p>
            </div>
          </div>
          <div className="rounded-lg h-it shadow-xl shadow-outline hover:scale-95 duration-300 hover:bg-sky-200 grid border grid-cols-5 gap-x-2">
            <div className="col-span-2 h-full w-full rounded-lg">
              <Image
                priority={true}
                className="rounded-l-lg h-full"
                src='/customer_service.webp'
                width={640}
                height={360}
                alt="Customer service image"
              />
            </div>
            <div className="col-span-3 p-2 h-fit my-auto">
              <h2 className="text-xl font-light mb-3">
                Get your <span className="font-bold">Medical Certificate of Fitness </span>
                Today!
              </h2>
              <Link href='/#book-quote' className="p-2 text-white bg-emerald-800 rounded">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment-rental" className="bg-gray-200 p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="w-full h-fit my-auto">
          <h1 className="mb-2 text-3xl font-bold">
            Medical equipment rental
          </h1>
          <p className="text-base text-slate-700 mb-2">
            We offer a wide range of high-quality equipment available for hire to support your
            occupational health and safety needs. From medical devices to safety gear, our rental
            options provide flexibility and reliability for your workplace requirements.
          </p>

          <Link href='tel:+263776409817' className="flex items-center gap-x-1 w-fit p-2 text-white bg-blue-700 rounded">
            <Icon className="transform rotate-270" path={mdiPhone} size={1} color="currentColor" />
            Give us a call
          </Link>
        </div>

        <div className="w-full flex items-center">
          <Image
            priority={true}
            className="rounded-md shadow-lg lg:w-4/5 hover:scale-95 duration-300"
            src='/radiology_equipment.webp'
            width={640}
            height={360}
            alt="Radiology equipment"
          />
        </div>
      </section>

      <section id="walk-in-clinics" className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="w-full flex items-center">
          <Image
            priority={true}
            className="rounded-md shadow-lg lg:w-4/5 hover:scale-95 duration-300"
            src='/physical-exam.jpg'
            width={640}
            height={360}
            alt="Radiology equipment"
          />
        </div>

        <div className="w-full h-fit my-auto">
          <h1 className="mb-2 text-3xl font-bold">
            Walk-in/Onsite Examinations
          </h1>
          <p className="text-base text-slate-700 mb-2">
            Ensure prompt and tailored healthcare services by scheduling your Walk-in or Onsite
            examinations. By appointment, you secure convenient access to essential health
            assessments, maximizing efficiency and ensuring your health needs are met without delay.
          </p>

          <Link href='tel:+263776409817' className="flex items-center gap-x-1 w-fit p-2 text-white bg-blue-700 rounded">
            <Icon className="transform rotate-270" path={mdiPhone} size={1} color="currentColor" />
            Give us a call
          </Link>
        </div>

      </section>
      <section id="physical-exam" className="bg-gray-200 p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="w-full h-fit my-auto">
          <h1 className="mb-2 text-3xl font-bold">
            Dr's Physical examinations
          </h1>
          <p className="text-base text-slate-700 mb-2">
            Secure a thorough and personalized health assessment by booking your Doctor’s Physical 
            Examination. Scheduling an appointment ensures you receive comprehensive care at a time 
            that suits you, allowing our expert medical team to focus on your specific health needs 
            without any rush or wait.
          </p>

          <Link href='tel:+263776409817' className="flex items-center gap-x-1 w-fit p-2 text-white bg-blue-700 rounded">
            <Icon className="transform rotate-270" path={mdiPhone} size={1} color="currentColor" />
            Give us a call
          </Link>
        </div>

        <div className="w-full flex items-center">
          <Image
            priority={true}
            className="rounded-md shadow-lg lg:w-4/5 hover:scale-95 duration-300"
            src='/doc_equipment.jpg'
            width={640}
            height={360}
            alt="Radiology equipment"
          />
        </div>
      </section>
    </main>
  )
}