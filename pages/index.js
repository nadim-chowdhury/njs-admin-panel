import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const index = () => {
  return (
    <section>
      <div>
        <Header />

        <div className="w-full pl-12 pr-14 mb-16">
          <div className="grid grid-cols-12 ">
            <div className="col-span-1">
              <Sidebar />
            </div>

            <div className="col-span-11">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
