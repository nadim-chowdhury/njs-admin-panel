import { HiMenuAlt1 } from "react-icons/hi";
import { BsBook, BsPerson, BsWallet2 } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full px-20 py-10">
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-x-24">
          <div className="text-3xl">
            <HiMenuAlt1 />
          </div>

          <div className="font-bold text-2xl">
            <h1 className="uppercase">IIO Team</h1>
          </div>
        </div>

        <div className="flex gap-x-2">
          <div className="px-6 bg-blue-200 rounded-full flex items-center justify-center">
            <h3>Nadim Chowdhury</h3>
          </div>

          <div className="bg-gradient-to-tl from-blue-500 to-blue-300 rounded-full p-3 text-xl text-white">
            <BsPerson />
          </div>

          <div className="bg-gradient-to-tl from-blue-500 to-blue-300 rounded-full p-3 text-xl text-white">
            <BsWallet2 />
          </div>

          <div className="bg-gradient-to-tl from-purple-500 to-purple-300 rounded-full p-3 text-xl text-white">
            <CiHeadphones />
          </div>

          <div className="bg-gradient-to-tl from-purple-500 to-purple-300 rounded-full p-3 text-xl text-white">
            <BsBook />
          </div>

          <div className="bg-gradient-to-tl from-red-500 to-red-300 rounded-full p-3 text-xl text-white">
            <IoMdNotificationsOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
