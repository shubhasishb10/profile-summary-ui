import { useContext } from "react";
import { HeaderContext } from "../store/contexts";

export default function Header() {
  const headerData = useContext(HeaderContext);

  return (
    <div className="flex bg-violet-300 bg-cover px-10 py-[1%] bg-[url('header-bg.jpeg')] text-gray-100 gap-10 shadow-2xl border-b-2 border-b-blue-800">
      <h1 className="text-4xl font-bold pt-2 text-white tracking-wide">
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
      </div>
    </div>
  );
}
