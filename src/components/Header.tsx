import { useContext } from "react";
import { HeaderContext } from "../store/contexts";

export default function Header() {

    const headerData = useContext(HeaderContext);

    return (
    <div className="flex border-b-[3px] border-blue-900 bg-blue-300 px-10 py-3 text-blue-900 gap-10">
      <h1 className="text-4xl font-bold pt-2">{headerData.profileName}</h1>
      <p className="border-r-4 mb-1 border-blue-900"></p>
      <div className="text-4xl pt-2">
        <strong>{headerData.currentOrganization}</strong>
      </div>
      <div className="text-3xl flex flex-auto justify-center pt-3">
        <h3 className="">{headerData.designation}</h3>
      </div>
      <div className="flex flex-row gap-6 pt-2">
        <div className="text-xl flex justify-end gap-2">
          <span className="text-3xl pb-3 text-center font-bold text-green-700">&#9990;</span>
          <h3 className="flex text-center pt-1 font-medium">{headerData.mobileNumber}</h3>
        </div>
        <div className="text-xl flex justify-end gap-2">
          <span className="text-3xl pb-3 text-center font-semibold text-red-500">&#9993;</span>
          <a href="mailto:shubhasishb10@gmail.com" className="flex text-center pt-1 font-medium"><u>{headerData.emialId}</u></a>
        </div>
      </div>
    </div>
  );
}