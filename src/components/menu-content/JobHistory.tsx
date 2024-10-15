import TechnologyName from "../TechnologyName";
import JobDetail from "./job-history/JobDetail";

export default function JobHistory() {
  const headerBorder =
    "pl-4 pr-4 pt-2 pb-2 outline outline-1 outline-gray-400 outline-collapse border-slate-400 bg-slate-100 text-slate-500 text-lg";
  const cellBorder =
    "pl-2 pr-2 pt-2 outline outline-1 outline-gray-200  pb-2 text-slate-500 border-collapse";

  return (
    <div className="flex flex-col items-center">
      <div
        className="text-center text-white w-60 text-3xl mt-20 border-2 p-2 
            bg-[#bebfc0]  bg-fixed
            rounded-lg shadow-inner"
      >
        Job History
      </div>
      <div className="p-2 m-5">
        <table
          style={{ maxHeight: "75vh", overflowY: "auto", display: "block"}}
          className="w-full border-2 mb-5 outline-offset-4 border-collapse outline outline-1 outline-gray-200 overflow-hidden text-center rounded-lg shadow-inner"
        >
          <thead style={{ position: "sticky", top: 0 }}>
            <th className={headerBorder}>Sr No</th>
            <th className={headerBorder}>Company Name</th>
            <th className={`${headerBorder} min-w-48`}>From</th>
            <th className={`${headerBorder} min-w-48`}>To</th>
            <th className={`${headerBorder} min-w-32`}>Duration</th>
            <th className={headerBorder}>Position</th>
            <th className={`${headerBorder} min-w-72`}>Duties</th>
            <th className={`${headerBorder} relative w-[10%]`}>Technologies</th>
          </thead>
          <tbody className="border-collapse h-96 overflow-y-auto">
            <tr className="border-collapse">
              <td className={cellBorder}>1</td>
              <td className={`${cellBorder}`}>Tata Consultancy Services</td>
              <td className={`${cellBorder}`}>OCT-2016</td>
              <td className={cellBorder}>FEB-2020</td>
              <td className={cellBorder}>3Y 4M</td>
              <td className={cellBorder}>System Engineer</td>
              <td className={`${cellBorder}`}>
                <ul className="list-disc text-left pl-4">
                  <li>ETL Work</li>
                  <li>Status update to client</li>
                  <li>Java Developer</li>
                </ul>
              </td>
              <td className={`${cellBorder} grid pl-2 pr-2`}>
                <TechnologyName>Java</TechnologyName>
                <TechnologyName>EJB</TechnologyName>
                <TechnologyName>MSSQL</TechnologyName>
                <TechnologyName>AngularJs</TechnologyName>
              </td>
            </tr>
            <tr>
              <td className={cellBorder}>2</td>
              <td className={`${cellBorder}`}>Cognizant</td>
              <td className={cellBorder}>MAR-2020</td>
              <td className={cellBorder}>SEPT-2021</td>
              <td className={cellBorder}>1Y 6M</td>
              <td className={cellBorder}>Associate</td>
              <td className={`${cellBorder}`}>
                <ul className="list-disc text-left pl-4">
                  <li>EIS v12 Development</li>
                  <li>Status update to client</li>
                </ul>
              </td>
              <td className={`${cellBorder} grid pl-2 pr-2`}>
                <TechnologyName>Java</TechnologyName>
                <TechnologyName>Spring Boot</TechnologyName>
                <TechnologyName>Oracle DB</TechnologyName>
                <TechnologyName>JSF</TechnologyName>
              </td>
            </tr>
            <tr>
              <td className={cellBorder}>3</td>
              <td className={`${cellBorder}`}>LTI</td>
              <td className={cellBorder}>NOV-2021</td>
              <td className={cellBorder}>MAY-2022</td>
              <td className={cellBorder}>7M</td>
              <td className={cellBorder}>Senior Software Engineer</td>
              <td className={`${cellBorder}`}>
                <ul className="list-disc text-left pl-4">
                  <li>AEM Developer</li>
                  <li>Java Developer with Struts framework</li>
                </ul>
              </td>
              <td className={`${cellBorder} grid pl-2 pr-2`}>
                <TechnologyName>Java</TechnologyName>
                <TechnologyName>AEM</TechnologyName>
                <TechnologyName>Oracle DB</TechnologyName>
                <TechnologyName>Struts</TechnologyName>
              </td>
            </tr>
            <tr>
              <td className={cellBorder}>4</td>
              <td className={`${cellBorder}`}>PwC</td>
              <td className={cellBorder}>MAY-2022</td>
              <td className={cellBorder}>JUL-2024</td>
              <td className={cellBorder}>2Y 3M</td>
              <td className={cellBorder}>Senior Associate</td>
              <td className={`${cellBorder}`}>
                <ul className="list-disc text-left pl-4">
                  <li>Lead Developer</li>
                  <li>V20 enhancement</li>
                  <li>Guide team mates</li>
                  <li>Daily status reporting to client</li>
                </ul>
              </td>
              <td className={`${cellBorder} grid pl-2 pr-2`}>
                <TechnologyName>EIS V20</TechnologyName>
                <TechnologyName>Java 11</TechnologyName>
                <TechnologyName>Spring Boot</TechnologyName>
                <TechnologyName>Postgres</TechnologyName>
                <TechnologyName>ReactJs</TechnologyName>
                <TechnologyName>Docker</TechnologyName>
                <TechnologyName>Kafka</TechnologyName>
              </td>
            </tr>
            <tr>
              <td className={cellBorder}>5</td>
              <td className={`${cellBorder}`}>EIS</td>
              <td className={cellBorder}>JUL-2024</td>
              <td className={cellBorder}>-</td>
              <td className={cellBorder}>-</td>
              <td className={cellBorder}>Software Technical Advisor</td>
              <td className={`${cellBorder}`}>
                <ul className="list-disc text-left pl-4">
                  <li>Technical Advisor</li>
                  <li>Helping implementation team to overcome technical complexities</li>
                  <li>Mentor for certification exam</li>
                  <li>Technical trainer</li>
                </ul>
              </td>
              <td className={`${cellBorder} grid pl-2 pr-2`}>
                <TechnologyName>EIS V20</TechnologyName>
                <TechnologyName>Java 11</TechnologyName>
                <TechnologyName>Spring Boot</TechnologyName>
                <TechnologyName>Postgres</TechnologyName>
                <TechnologyName>ReactJs</TechnologyName>
                <TechnologyName>Docker</TechnologyName>
                <TechnologyName>Kafka</TechnologyName>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
