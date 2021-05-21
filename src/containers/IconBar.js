import { RiMenuLine, RiHome4Line, RiBook2Line } from "react-icons/ri";
import { GiMagnifyingGlass, GiStack } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { HiPhotograph } from "react-icons/hi";

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
      <RiHome4Line
        className="sidebar-icon"
        onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
        }}
      />
      <RiMenuLine className="sidebar-icon" />
      <GiMagnifyingGlass className="sidebar-icon" />
      <RiBook2Line className="sidebar-icon" />
      <ImLab className="sidebar-icon" />
      <HiPhotograph className="sidebar-icon" />
      <GiStack className="sidebar-icon" />
    </div>
  );
}
