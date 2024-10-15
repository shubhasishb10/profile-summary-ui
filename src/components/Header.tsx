import { useContext } from "react";
import { HeaderContext } from "../store/contexts";

import profileBackground from "./../profile-bg.jpg";
import avatarPicture from "./../profile-pic.jpg";

export default function Header() {
  const headerData = useContext(HeaderContext);

  return (
    <div className="bg-cover text-center">
      <div className="border-b-4 border-[rgb(173,177,180)]">
        <img
          src={profileBackground}
          className="h-40 w-[100%] object-cover opacity-70"
          alt="code"
        />
      </div>
      <div
        className="absolute left-[42%] top-[3%] w-60 h-60 bg-[#C3C6D4] 
          border-white
            border-4 border-double rounded-full overflow-hidden flex 
            justify-evenly"
      >
        <img
          src={avatarPicture}
          className="object-contain absolute shadow-2xl shadow-slate-200"
          alt="code"
        />
      </div>
      {/* <h1 className="text-4xl font-bold pt-2 text-white tracking-wide">
        {headerData.profileName}
      </h1>
      <p className="border-r-2 mb-1 border-gray-200"></p>
      <div className="text-4xl pt-2 text-sky-400 hover:text-blue-100">
        <a href={headerData.organizationUrl} rel="noreferrer" target="_blank">
          <strong className="tracking-widest">
            {headerData.currentOrganization}
          </strong>
        </a>
      </div>
      <p className="border-r-2 mb-1 border-gray-200"></p>
      <div className="text-3xl flex flex-auto pt-3">
        <h3 className="text-indigo-200">{headerData.designation}</h3>
      </div>
      <div className="flex flex-row gap-6 pt-2">
        <div className="text-xl flex justify-end gap-2">
          <span className="text-3xl pb-3 text-center font-bold text-green-200">
            &#9990;
          </span>
          <h3 className="flex text-center pt-1 font-medium">
            {headerData.mobileNumber}
          </h3>
        </div>
        <div className="text-xl flex justify-end gap-2">
          <span className="text-3xl pb-3 text-center font-semibold text-red-500">
            &#9993;
          </span>
          <a
            href="mailto:shubhasishb10@gmail.com"
            className="flex text-center pt-1 font-medium"
          >
            <u>{headerData.emialId}</u>
          </a>
        </div>
      </div> */}
    </div>
  );
}
