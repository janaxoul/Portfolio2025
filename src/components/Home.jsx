import Experience from "./Experience";
import Name from "./Name";
import Summary from "./Summary";

function Content() {
    return (
        <div className="content text-[#3c3c3c]">
        <Name/>
        <Summary/>
        <Experience/>
        </div>
    );
}

export default Content;