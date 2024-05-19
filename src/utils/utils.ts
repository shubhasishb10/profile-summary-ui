import AboutMe from "../components/menu-content/AboutMe";
import JobHistory from "../components/menu-content/JobHistory";
import Skills from "../components/menu-content/Skills";
import Projects from "../components/menu-content/Projects";
import Contacts from "../components/menu-content/Contacts";
import Education from "../components/menu-content/Education";

/**
 * 
 * @param headerName Education
MenuItems.tsx:12 Job History
MenuItems.tsx:12 Technologies
MenuItems.tsx:12 Projects
MenuItems.tsx:12 Contacts
 */

export function getPageComponentNameFromHeadername(headerName: string): () => JSX.Element {
    switch(headerName) {
        case "About me":
            return AboutMe;
        case "Job History":
            return JobHistory;
        case "Technologies":
            return Skills;
        case "Projects":
            return Projects;
        case "Contacts":
            return Contacts;
        case "Education":
            return Education;
        default:
            return AboutMe;

    }
} 