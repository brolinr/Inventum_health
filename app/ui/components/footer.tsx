import Icon from "@mdi/react";
import Link from "next/link";
import { mdiLinkedin, mdiFacebook, mdiInstagram, mdiEmail } from "@mdi/js";

const social_links = [
  { username: 'Inventum_zw', icon: mdiLinkedin, link: '' },
  { username: 'info@Inventum.co.zw', icon: mdiEmail, link: '' },
  { username: 'Inventum ZW', icon: mdiFacebook, link: '' },
  { username: 'inventum_zw', icon: mdiInstagram, link: '' }
]

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-slate-100 text-black">
      <div className="md:w-4/5 mx-auto grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-1 bg-slate-300 p-5 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-blue-600 font-black"> INVENTUM SERVICES </h1>
          <span className="text-black font-medium">HEALTH DIVISION</span>
          <span className="text-base font-medium">{`&"Excellence defined.&"`}</span>

          <span className="text-sm mt-1 lg:w-3/5 mx-auto text-center">
            490B Sappers Contour,
            Lynnwood, Pretoria, 0081
          </span>
        </div>

        <div className="col-span-1 bg-slate-300 p-5 rounded-lg flex flex-col">
          <h1 className="text-blue-600 mb-2 font-black text-center">OFFICE HOURS</h1>
          <span className="text-sm text-black font-medium text-center">Mon - Thu: 8AM - 3PM</span>
          <span className="text-sm font-medium text-center">Fri: 8AM - 1PM</span>

          <span className="text-sm lg:w-3/5 mx-auto text-center">
            Weekends: Closed
          </span>
        </div>

        <div className="col-span-1 bg-slate-300 p-5 rounded-lg flex flex-col">
          <h1 className="text-blue-600 font-black text-center mb-2"> RELEVANT LINKS </h1>
          <span className="text-black font-medium">Services</span>
          <span className="text-black font-medium">Legal requirements</span>
          <span className="text-black font-medium">Request Quotation</span>
        </div>
      </div>
      <div className="w-[90%] my-5 mx-auto rounded-full p-2 bg-white grid grid-cols-4">
        {
          social_links.map((link, index) => (
            <div 
              key={index}
              className="
                flex-row gap-2 flex justify-self-center items-center hover:scale-95
                h-fit duration-300 hover:bg-blue-200 py-2 px-4 rounded-full
              "
            >
              <Icon path={link.icon} size={1} color="currentColor" />
              <Link
                href={link.link}
                className="text-black text-sm font-medium"
              >
                {link.username}
              </Link>
            </div>
          ))
        }
        
      </div>
    </footer>
  )
}