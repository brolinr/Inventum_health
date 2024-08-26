import Icon from "@mdi/react";
import Link from "next/link";
import { mdiPhone, mdiLinkedin, mdiFacebook, mdiEmail } from "@mdi/js";

const social_links = [
  { username: "+263776409817", icon: mdiPhone, link: "tel:+263776409817" },
  {
    username: "inventumzim@gmail.com",
    icon: mdiEmail,
    link: "mailto:inventumzim@gmail.com",
  },
  { username: "Inventum ZW", icon: mdiLinkedin, link: "" },
  { username: "Inventum ZW", icon: mdiFacebook, link: "" },
];

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-white text-black">
      <div className="md:w-4/5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1 bg-slate-300 p-5 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-blue-600 font-black"> INVENTUM SERVICES </h1>
          <span className="text-black font-medium">HEALTH DIVISION</span>
          <span className="text-base font-medium">{`"Excellence defined."`}</span>
        </div>

        <div className="col-span-1 bg-slate-300 p-5 rounded-lg flex flex-col">
          <h1 className="text-blue-600 mb-2 font-black text-center">
            Office Hours
          </h1>
          <span className="text-sm text-black font-medium text-center">
            Mon - Thu: 8AM - 3PM
          </span>
          <span className="text-sm font-medium text-center">
            Fri: 8AM - 1PM
          </span>

          <span className="text-sm lg:w-3/5 mx-auto text-center">
            Weekends: Closed
          </span>
        </div>
      </div>
      <div className="lg:w-[90%] my-5 mx-auto md:rounded-full bg-gray-100 grid md:grid-cols-4 grid-cols-1">
        {social_links.map((link, index) => (
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm font-medium"
            >
              {link.username}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
