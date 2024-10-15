import { Table } from "@table-library/react-table-library";

export default function Education() {
  const headerBorder = "pl-10 pr-10 pt-2 pb-2 border-2 bg-slate-100 text-slate-600";
  const cellBorder = "pl-10 pr-10 pt-2 pb-2 border-2 text-slate-500";

  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-white w-60 text-3xl mt-20 border-2 p-2 
            bg-[#bebfc0]  bg-fixed
            rounded-lg shadow-inner">
        Education
      </div>
      <div className="text-justify text-lg pt-10 pl-10 pr-10">
        <table className="w-full border-2 border-collapse outline outline-1 outline-gray-200 overflow-hidden text-center rounded-lg shadow-inner">
          <thead>
            <th className={headerBorder}>Year</th>
            <th className={headerBorder}>Examination</th>
            <th className={headerBorder}>Board</th>
            <th className={headerBorder}>% Marks</th>
            <th className={headerBorder}>Download</th>
          </thead>
          <tbody>
            <tr>
              <td className={cellBorder}>2009 - 2010</td>
              <td className={cellBorder}>10th Examination</td>
              <td className={cellBorder}>
                West Bengal Board of Secondary Education
              </td>
              <td className={cellBorder}>90</td>
              <td rowSpan={3} className={`${cellBorder}`}>
                <a
                  rel="noreferrer"
                  href="https://drive.google.com/drive/folders/1mGPS24UewEqUdoFH7tnmql5VuqWOKfiN?usp=sharing"
                  target="_blank"
                >
                  <span style={{ fontSize: "50px", color: "deepskyblue" }}>&#8618;</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className={cellBorder}>2011 - 2012</td>
              <td className={cellBorder}>12th Examination</td>
              <td className={cellBorder}>
                West Bengal Council of Higher Secondary Education
              </td>
              <td className={cellBorder}>96</td>
            </tr>
            <tr>
              <td className={cellBorder}>2012 - 2016</td>
              <td className={cellBorder}>Graduation</td>
              <td className={cellBorder}>
                West Bengal University of Technology
              </td>
              <td className={cellBorder}>74</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
