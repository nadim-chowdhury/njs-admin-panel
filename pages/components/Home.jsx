import { BiHomeAlt } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import Url from "./Url";
import Consumption from "./Consumption";
import Category from "./Category";
import Carousel from "./Carousel";
import Tickets from "./Tickets";

const Home = () => {
  return (
    <section>
      <div>
        <div className="bg-blue-50 rounded-lg py-3">
          <div className="pl-3 mb-10 pr-3">
            <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-x-5">
                <div>
                  <BiHomeAlt />
                </div>
                <div>
                  <p>Home</p>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <div>
                  <BsCalendar2Date />
                </div>
                <div>
                  <p>1/30/2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pl-3">
            <div className="grid grid-cols-12">
              <div className="col-span-5 pr-3">
                <Url />
                <Consumption />
              </div>

              <div className="col-span-2 pb-5">
                <Category />
              </div>

              <div className="col-span-5 pr-20 pl-3">
                {/* <Carousel /> */}
                <Tickets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
