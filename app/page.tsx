import Image from "next/image";
import Link from "next/link";
import Icon from '@mdi/react';
import { 
  mdiArrowTopRight, mdiCertificateOutline, mdiLineScan,
  mdiClipboardEditOutline, mdiHospital, mdiHardHat,
  mdiHospitalBox, mdiHospitalMarker, mdiHours24,
  mdiMapCheckOutline, mdiTag,
  mdiStore24Hour, mdiCreation,
  mdiVanUtility
} from '@mdi/js';
import { QuotationForm } from "./ui/components";

export default function Home() {
  return (
    <main className="w-full">
      <section id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-b px-8 py-20 from-blue-800 to-blue-300">
        <div className="md:col-span-2 gap-y-2 h-fit my-auto">
          <span className="px-2 py-1 rounded text-black bg-white font-bold text-base text-blue-600">
            WHO ARE WE
          </span>
          <h1 className="text-4xl my-2 w-full lg:w-4/5 font-bold">
            Inventum Health Services: Experts in Mobile Occupational Health Care and Corporate Wellness
          </h1>
          <p className="text-lg my-4 w-full lg:w-4/5">
            We provide on-site health services, including medical certificates, workplace safety
            training, and corporate wellness services, tailored to meet your organization's needs.
          </p>
          <div className="grid grid-cols-2 gap-2 w-full lg:w-3/5">
            <Link 
              key='hero-quote'
              href='#book-quote'
              className="
                text-lg font-bold hover:scale-110 duration-95 mt-4
                text-blue-600 bg-white text-center p-2 rounded-lg
                flex flex-row gap-1 justify-center
              "
              aria-label="Get a free quotation for Inventum Health Services"
            >
              Free Quotation
              <Icon path={mdiArrowTopRight} size={1} color="currentColor" />
            </Link>
          </div>
        </div>
        <div className="col-span-1 w-full h-fit my-auto grid grid-cols-2 gap-2 rounded">
          <Image
            src="/1.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Illustration of our certification process"
            title="Specialized Medical Certifications"
          />
          <Image
            src="/2.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Illustration of a corporate setup"
            title="Corporate Wellness Programs"
          />
          <Image
            src="/3.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Illustration of workplace safety measures"
            title="Workplace Safety Training"
          />
          <Image
            src="/4.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Illustration of workplace health services"
            title="Workplace Health Services"
          />
        </div>
      </section>

      <section id="partners" className="text-center py-8 bg-gray-100 text-black">
        <h1 className="text-4xl font-bold">
          Our Trusted Partners
        </h1>
        <p className="text-lg my-2 w-full md:w-3/5 mx-auto">
          Collaborating with industry experts to enhance our mobile health care and wellness services.
        </p>
        <div className="px-4 my-4 grid grid-cols-2 md:grid-cols-2 gap-6 md:w-2/5 mx-auto">
          <div className=" bg-blue-400 p-4 rounded-xl" aria-label="Partner 1 logo" title="Partner 1"></div>
          <div className=" bg-blue-400 p-4 rounded-xl" aria-label="Partner 2 logo" title="Partner 2"></div>
        </div>
      </section>

      <section id="services" className="py-8 bg-white w-full text-black grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="p-4 h-fit my-auto flex flex-col text-center justify-center items-center">
          <h1 className="text-3xl font-bold md:w-3/5">
            Our Mobile Occupational Health & Safety Services
          </h1>
          <p className="text-base font-normal md:w-3/5 my-4">
            Industry experts in Mobile Occupational Health Care and Corporate
            Wellness, offering specialized medical certificates and workplace
            safety training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {/* Onsite/Walk-in Exams */}
          <div className="bg-slate-200 h-fit shadow-xl py-10 duration-300 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center">
            <div className="text-blue-700 flex justify-center items-center mb-2 w-12 h-12 bg-white p-1 rounded-lg">
              <Icon path={mdiHospital} size={2} color="currentColor" />
            </div>
            <h2 className="text-2xl font-bold text-blue-800">
              Onsite Exams
            </h2>
            <p className="text-md text-center w-[90%]">
              Available upon appointment. Contact us today to have 
              our experts conduct your examination with care and professionalism.
            </p>
          </div>
          
          {/* Screening Equipment Rental */}

          <div className="bg-slate-200 h-fit shadow-xl py-10 duration-300 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center">
            <div className="text-blue-700 flex justify-center items-center mb-2 w-12 h-12 bg-white p-1 rounded-lg">
              <Icon path={mdiVanUtility} size={2} color="currentColor" />
            </div>
            <h2 className="text-2xl font-bold text-blue-800">
              Equipment Rental
            </h2>
            <p className="text-base text-center w-[91%]">
              Rent advanced screening equipment for health assessments with flexible 
              payment options to meet you needs.
            </p>
          </div>
          
          {/* Health, Safety & Environmental Training */}
          <div className="bg-slate-200 h-fit shadow-xl py-10 duration-300 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center">
            <div className="text-blue-700 flex justify-center items-center mb-4 w-12 h-12 bg-white p-1 rounded-lg">
              <Icon path={mdiHardHat} size={2} color="currentColor" />
            </div>
            <h2 className="text-2xl font-bold text-blue-800 text-center mb-2">
              Workplace Safety Training
            </h2>
            <p className="text-base text-center w-[90%]">
              Enhance workplace safety through specialized training programs 
              designed to equip your team with essential skills and knowledge 
              for a safer workplace environment.
            </p>
          </div>

          {/* More Services */}
          <div className="h-fit shadow-xl bg-slate-300 duration-300 hover:bg-slate-400 p-4 rounded-lg flex flex-col gap-y-2 ">
            <h2 className="text-2xl font-bold text-blue-800">
              Discover More Services
            </h2>
            <p className="text-base mb-4">
              Explore our comprehensive range of services, including workplace medicals and
              more. For a detailed list, visit our services page.
            </p>
            <Link href="/services" className="
              rounded-lg flex gap-2 flex-row justify-center items-center 
              text-blue-800 md:w-4/5 lg:w-3/5 py-2 w-3/5 duration-300 bg-white
              hover:bg-blue-700 hover:text-white font-bold text-lg
              flex flex-row justify-center items-center gap-1
            ">
              Learn more 
              <Icon path={mdiArrowTopRight} size={1} color="currentColor" />
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 p-7 lg:p-10">
        <div className="col-span-1 text-black w-4/5 lg:w-full">
          <h2 className="text-3xl font-bold mb-4">Why Choose Inventum Health Services?</h2>
          <p className="text-base mb-4 md:w-4/5">
            Trust Inventum for unparalleled expertise in ensuring compliance under the 
            Pneumoconiosis Act and the Public Health Act.
          </p>
          <ul className="list-disc pl-5 mb-4 text-base text-slate-700">
            <li>
              Tailored solutions that prioritize your specific operational needs.
            </li>
            <li>
              Efficient service delivery, minimizing disruption to your operations.
            </li>
            <li>
              Dedicated specialists committed to excellence in occupational health and safety.
            </li>
            <li>
              Innovating with advanced technologies and solutions for enhanced service delivery.
            </li>
          </ul>

          <Link href='/learn-more' className="font-bold text-lg text-white bg-blue-800 rounded-md p-2 flex items-center w-fit gap-1">
            Learn more
            <Icon path={mdiArrowTopRight} size={1} color="currentColor" />
          </Link>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/why-us.jpeg" width={1000} height={760}
            className="rounded-lg duration-300 hover:scale-95 w-4/5"
            alt="Inventum Health Services logo"
          />        
        </div>
      </section>

      <section id="legal-compliance" className="grid px-3 py-10 text-base bg-white text-black md:grid-cols-2 gap-4 grid-cols-1">
        <div className="col-span-1">
          <div className="flex flex-col gap-y-1 md:w-4/5 mx-auto p-10 rounded-2xl bg-blue-200">
            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiTag} size='1.4rem' color="currentColor" />
              </span>
              Best Rates Guaranteed
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiMapCheckOutline} size={1} color="currentColor" />
              </span>
              Nationwide Coverage
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiStore24Hour} size={1} color="currentColor" />
              </span>
              24-Hour Operation
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiCertificateOutline} size={1} color="currentColor" />
              </span>
              Immediate Certification
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiHospitalMarker} size={1} color="currentColor" />
              </span>
              Walk-in Clinic Available by Appointment
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiCreation} size={1} color="currentColor" />
              </span>
              State-of-the-Art Equipment and Mobile Units
            </span>

            <h2 className="text-2xl my-2 md:w-[90%] mx-auto font-bold text-center">
              <span className="font-extralight">Get your</span> Medical Certificate of Fitness today!
            </h2>
          </div>          
        </div>
        <div className="col-span-1 md:w-4/5 h-fit my-auto text-black">
          <h1 className="text-4xl mb-2">Are You Legally Compliant?</h1>

          <p className="text-base mb-2">
            Why do you need a Medical Certificate of Fitness? It's legally required for workplaces where employees are exposed to hazards.
          </p>
          
          <p className="text-base">
            Discover our professional on-site and off-site Occupational Health and Safety solutions, customized to meet your company's unique needs.
          </p>
        </div>
      </section>

      <section id="book-quote" className="bg-gray-100 p-8 text-black grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1">
          <QuotationForm />
        </div>

        <div className="col-span-1">
          <Image
            src="/customer_service.webp" width={1000} height={760}
            className="hidden md:block rounded-lg duration-300 hover:scale-95"
            alt="Customer service team assisting clients"
          />
        </div>
      </section>
    </main>
  );
}
