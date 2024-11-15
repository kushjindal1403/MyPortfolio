import Main from "./MainContent/main";
import Sidebar from "./SideBar/SideBar.js";

const Desktop = () => {
  return (
    <div className="lg:grid lg:p-8 lg:grid-cols-[140px_auto] xl:grid-cols-[240px_auto] 2xl:grid-cols-[340px_auto] lg:gap-5">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Desktop;
