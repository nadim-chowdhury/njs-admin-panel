import { BiHomeAlt } from "react-icons/bi";
import {
  BsCameraVideo,
  BsCloudy,
  BsHeadphones,
  BsPlayBtn,
} from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { ImEarth } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePoweroff, AiOutlineCalculator } from "react-icons/ai";

const Sidebar = () => {
  return (
    <section>
      <div className="w-full">
        <div className="w-[70%] bg-blue-50 white flex flex-col items-center rounded-xl gap-y-12 py-6">
          <div className="text-xl text-blue-600 hover:scale-105">
            <BiHomeAlt />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <ImEarth />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <BsCloudy />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <BsCameraVideo />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <BsPlayBtn />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <CgProfile />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <CiWallet />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <AiOutlineCalculator />
          </div>

          <div className="text-xl text-blue-600 hover:scale-105">
            <BsHeadphones />
          </div>

          <div className="text-xl text-red-600 hover:scale-105 mt-10">
            <AiOutlinePoweroff />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
