import { useContext } from "react";
import PageButton from "../controls/PageButton";
import { MainContentContext } from "../../store/contexts";
import PageSection from "../controls/PageSection";

export default function AboutMe() {
  const mainContent = useContext(MainContentContext);

  return (
    <div className="w-[100%] text-2xl flex justify-left h-vh">
      <PageSection
        title="Bio"
        propClassName="bg-blue-400 text-white w-2/4"
      >
        <div>
          <form className="flex">
              Hello, I'm Shubhasish Bhunia, a passionate software developer with
              over 7+ years of experience. My expertise lies in developing
              robust and scalable applications using Java, Spring Boot,
              JavaScript, Angular. I work in EIS suite in the newest V20
              solution. Also have experience working in v6,V12, PolicyCore,
              ClaimCore, Customer360, Product Studio. I'm proud to have acquired
              the Java 11 certification from Oracle, which has sharpened my
              skills in the language and helped me stay up-to-date with the
              latest developments in the Java ecosystem. Throughout my career, I
              have worked on a variety of projects, ranging from enterprise
              applications to microservices-based architectures. I enjoy working
              in a fast-paced and dynamic environment, and I'm always looking
              for opportunities to learn and grow. In addition to my technical
              skills, I'm an ambitious individual with a strong work ethic. I
              believe in delivering high-quality work on time and exceeding
              client expectations. I'm also a team player who enjoys
              collaborating with others to achieve a common goal. If you're
              looking for a dedicated and skilled software developer who can
              bring value to your organization, I'll be the perfect candidate.
          </form>
        </div>
      </PageSection>
      {/* <PageSection
        title="Bio"
        propClassName="bg-blue-400 text-white w-2/4"
      >
        <div>
          <form className="flex">
              Hello, I'm Shubhasish Bhunia, a passionate software developer with
              over 7+ years of experience. My expertise lies in developing
              robust and scalable applications using Java, Spring Boot,
              JavaScript, Angular. I work in EIS suite in the newest V20
              solution. Also have experience working in v6,V12, PolicyCore,
              ClaimCore, Customer360, Product Studio. I'm proud to have acquired
              the Java 11 certification from Oracle, which has sharpened my
              skills in the language and helped me stay up-to-date with the
              latest developments in the Java ecosystem. Throughout my career, I
              have worked on a variety of projects, ranging from enterprise
              applications to microservices-based architectures. I enjoy working
              in a fast-paced and dynamic environment, and I'm always looking
              for opportunities to learn and grow. In addition to my technical
              skills, I'm an ambitious individual with a strong work ethic. I
              believe in delivering high-quality work on time and exceeding
              client expectations. I'm also a team player who enjoys
              collaborating with others to achieve a common goal. If you're
              looking for a dedicated and skilled software developer who can
              bring value to your organization, I'll be the perfect candidate.
          </form>
        </div>
      </PageSection> */}
    </div>
  );
}
