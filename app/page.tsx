import Image from "next/image";
import Link from "next/link";
import Icon from '@mdi/react';
import { 
  mdiArrowTopRight, mdiCertificateOutline, mdiLineScan,
  mdiClipboardEditOutline, mdiHospital, mdiHardHat,
  mdiHospitalBox, mdiHospitalMarker, mdiHours24,
  mdiMapCheckOutline, mdiTag,
  mdiStore24Hour,
  mdiCreation
} from '@mdi/js';
import { QuotationForm } from "./ui/components";

export default function Home() {
  return (
    <main className="w-full">
      <section id="hero" className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-b px-8 py-20 from-blue-800 to-blue-300">
        <div className="md:col-span-2 gap-y-2 h-fit my-auto ">
          <span className="px-2 py-1 rounded text-black bg-white font-bold text-base text-blue-600">
            WHO ARE WE
          </span>
          <h1 className="text-4xl my-2 w-full lg:w-4/5 font-bold">
            Experts in Occupational Health Care and Corporate Wellness, offering specialized
            medical certificates and workplace safety training
          </h1>
          <div className="grid grid-cols-2 gap-2 w-full lg:w-3/5">
            <Link 
              key='hero-quote'
              href='#book-quote'
              className="
                text-lg font-bold hover:scale-110 duration-95 mt-4
                text-blue-600 bg-white text-center p-2 rounded-lg
                flex flex-row gap-1 justify-center
              "
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
            alt="Certification illustration"
          />
          <Image
            src="/2.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Corporate setup illustration"
          />
          <Image
            src="/3.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Workplace Safety illustration"
          />
          <Image
            src="/4.jpg" width={1000} height={760}
            className="rounded duration-300 hover:scale-95"
            alt="Workplace health illustration"
          />
        </div>
      </section>

      <section id="clients" className="text-center py-8 bg-gray-100 text-black">
        <h1 className="text-4xl font-bold">
          Our clients
        </h1>
        <div className="px-4 my-4 grid grid-cols-2 md:grid-cols-4 flex-row gap-6 md:w-4/5 mx-auto">
          <div className=" bg-blue-400 p-4 rounded-xl"></div>
          <div className=" bg-blue-400 p-4 rounded-xl"></div>
          <div className=" bg-blue-400 p-4 rounded-xl"></div>
          <div className=" bg-blue-400 p-4 rounded-xl"></div>
        </div>
      </section>

      <section id="services" className="py-8 bg-white w-full text-black grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="p-4 h-fit my-auto flex flex-col text-center justify-center items-center">
          <h1 className="text-3xl font-bold lg:w-[53%]">
            Our Occupational Health & Safety Services
          </h1>

          <p className="text-base font-normal md:w-3/5 my-4">
            Industry experts in Occupational Health Care and
            Corporate Wellness, offering Occupational Health
            Medical Certificates and specialized training
            in workplace safety.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10">
          <div className="bg-slate-300 duration-300 hover:bg-slate-400 p-4 rounded-lg flex flex-col justify-center items-center">
            <div className="text-blue-700 flex justify-center items-center mb-4 w-12 h-12 bg-white p-1 rounded-lg">
              <Icon path={mdiHospitalBox} size={2} color="currentColor" />
            </div>
            <h1 className="text-2xl font-bold text-blue-800">
              Workplace medicals
            </h1>

            <p className="text-base text-center">
              We offer in-depth Occupational Health Medicals to all 
              industries who must comply within the Health & Safety Act.
              Get your Certificate of Fitness and Annexure 3 today!
            </p>
          </div>
          <div className="bg-slate-300 duration-300 hover:bg-slate-400 p-4 rounded-lg flex flex-col justify-center items-center">
            <div className="text-blue-700 flex justify-center items-center mb-4 w-12 h-12 bg-white p-1 rounded-lg">
              <Icon path={mdiHardHat} size={2} color="currentColor" />
            </div>
            <h1 className="text-2xl font-bold text-blue-800 text-center mb-2">
              Health, Safety & Environmental Training
            </h1>

            <p className="text-base text-center">
              We give specialised occupational health, 
              safety and environmental workplace training.
            </p>
          </div>

          <div className="bg-slate-300 duration-300 hover:bg-slate-400 p-4 rounded-lg flex flex-col justify-center items-center">
            <div className="text-blue-700 flex justify-center items-center mb-4 w-12 h-12 bg-white p-1 rounded-lg">
              <Icon path={mdiLineScan} size={2} color="currentColor" />
            </div>
            <h1 className="text-2xl font-bold text-blue-800">
              X-ray Services
            </h1>

            <p className="text-base text-center">
              Get quick and accurate X-ray imaging for health checks and injury assessments. 
              Our advanced equipment and skilled team ensure precise results every time.
            </p>
          </div>

          <div className="bg-slate-300 duration-300 hover:bg-slate-400 p-4 rounded-lg flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold text-blue-800">
              Discover More Services
            </h1>
            <p className="text-base mb-4">
              Encourages users to explore further by visiting the services page,
              emphasizing the broad scope of available services.  
            </p>
            <button className="
              rounded-lg flex gap-2 flex-row justify-center items-center 
              text-blue-800 md:w-3/5 py-2 w-2/5 duration-300 bg-white
              hover:bg-blue-700 hover:text-white font-bold text-lg
              flex flex-row justify-center items-center gap-1
            ">
              Learn more 
              <Icon path={mdiArrowTopRight} size={1} color="currentColor" />
            </button>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-blue-50 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 lg:p-10">
        <div className="col-span-1 text-black">
          <h1 className="text-3xl font-bold">Why choose us?</h1>
          <p className="my-2 md:w-3/4">
            Choose Inventum for unrivaled expertise in ensuring 
            legal compliance under the Occupational Health & Safety 
            Act and Mine Health and Safety Act.
          </p>
          <ul className="list-disc pl-5 lg:w-[90%] marker:text-gray-500 mb-4 text-slate-700 text-base">
            <li>
              Tailored solutions that prioritize client-specific 
              needs and operational contexts.
            </li>
            <li>
              Swift and efficient service delivery, ensuring minimal
              disruption to your operations.
            </li>

            <li>
              Dedicated team of specialists committed to excellence
              in occupational health and safety.
            </li>
          </ul>

          <Link href='' className="font-bold text-lg text-white bg-blue-800 rounded-md p-2 flex flex-row w-fit gap-1 items-center">
            Learn more
            <Icon path={mdiArrowTopRight} size={1} color="currentColor" />
          </Link>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <Image
            src="/why-us.jpeg" width={1000} height={760}
            className="rounded-lg duration-300 hover:scale-95 md:w-[70%]"
            alt="Certification illustration"
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
              Nationwide coverage
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiStore24Hour} size={1} color="currentColor" />
              </span>
              24 hour operation
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
              Walk-in clinic available on appointment
            </span>

            <span className="flex gap-2 items-center flex-row text-base">
              <span className='text-blue-700'>
                <Icon path={mdiCreation} size={1} color="currentColor" />
              </span>
              Sate of the Art Equipment and Mobile units
            </span>

            <h1 className="text-2xl my-2 md:w-[90%] mx-auto font-bold text-center ">
              <span className="font-extralight"> Get your </span>
              Medical Certificate of Fitness today!
            </h1>
          </div>          
        </div>
        <div className="col-span-1 md:w-4/5 h-fit my-auto text-black">
          <h1 className="text-4xl mb-2">Are you legally compliant?</h1>

          <p className="text-base mb-2">
            Why do I need a Medical Certificate of Fitness? It is required by
            law that a Medical Surveillances programme should be 
            implemented in a workplaces where workers are 
            exposed to various hazards.
          </p>
          
          <p className="text-base">
            We offer professional on-site & off-site Occupational Health and
            Safety solutions for all industries, tailored to suite each individual
            Company{`&'`}s needs.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 p-8 text-black grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1 lg:p-10">
          <QuotationForm />
        </div>

        <div className="col-span-1">
          <Image
            src="/customer_service.webp" width={1000} height={760}
            className="hidden md:block rounded duration-300 h-full hover:scale-95"
            alt="Certification illustration"
          />
        </div>
        
      </section>
    </main>
  );
}
