import BottomBorders from "./BottomBorders";
import Experience from "./Experience";
import Name from "./Name";
import Projects from "./Projects";
import Summary from "./Summary";

function Content() {
    return (
        <div className="content text-[#3c3c3c]">
        <Name/>
        <BottomBorders/>
        <Summary/>
        <BottomBorders/>
        <Experience/>
        <BottomBorders/>
        <Projects/>
        <BottomBorders/>
        </div>
    );
}

export default Content;