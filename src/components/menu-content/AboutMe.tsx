import { useContext } from "react";
import PageButton from "../controls/PageButton";
import { MainContentContext } from "../../store/contexts";

export default function AboutMe() {

    const mainContent = useContext(MainContentContext);

  return (
    <div>
      <h1 className="w-[100%] text-2xl text-center justify-between p-24 h-vh">
        About Me Page
        <PageButton type="button" title="Submit"/>
        {mainContent.title}
      </h1>
    </div>
  );
}
