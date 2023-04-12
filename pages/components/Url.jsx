import { BsCircleFill } from "react-icons/bs";

const Url = () => {
  return (
    <div>
      <div className="w-full lg:h-48 xl:h-64 bg-white px-4 rounded-lg">
        <div className="h-[13%] flex justify-between items-center pt-4">
          <h3>Latest sites</h3>

          <div className="border border-gray-300 rounded-full py-1 px-4">
            <h5>Show all sites</h5>
          </div>
        </div>

        <div className="h-[70%] mt-4">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between py-2 w-full bg-blue-100 mb-1 rounded-lg">
                <th className="uppercase w-[30%] flex justify-start pl-4">
                  Url
                </th>
                <th className="uppercase w-[30%] flex justify-start pl-4">
                  Date
                </th>
                <th className="uppercase w-[30%] flex justify-start pl-4">
                  Condition
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start pl-4">
                  <div className="flex items-center gap-x-2">
                    <div className="text-sm text-green-500 mr-3">
                      <BsCircleFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg">linkedin.com</p>
                  </div>
                </td>

                <td className="w-[30%] pl-4 flex justify-start">
                  <div className="flex items-center">
                    <p className="text-center opacity-75">02/04/2023</p>
                  </div>
                </td>

                <td className="w-[30%] pl-4 flex justify-start">
                  <div>
                    <button className="bg-blue-100 text-blue-400 rounded-full px-5">
                      active
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start pl-4">
                  <div className="flex items-center gap-x-2">
                    <div className="text-sm text-red-500 mr-3">
                      <BsCircleFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg">instagram.com</p>
                  </div>
                </td>

                <td className="w-[30%] pl-4 flex justify-start">
                  <div className="flex items-center">
                    <p className="text-center opacity-75">02/04/2023</p>
                  </div>
                </td>

                <td className="w-[30%] pl-4 flex justify-start">
                  <div>
                    <button className="bg-blue-100 text-blue-400 rounded-full px-5">
                      active
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="flex justify-between border-b border-gray-200 py-1 w-full">
                <td className="w-[30%] flex justify-start pl-4">
                  <div className="flex items-center gap-x-2">
                    <div className="text-sm text-yellow-500 mr-3">
                      <BsCircleFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg">twitter.com</p>
                  </div>
                </td>

                <td className="w-[30%] pl-4 flex justify-start">
                  <div className="flex items-center">
                    <p className="text-center opacity-75">02/04/2023</p>
                  </div>
                </td>

                <td className="w-[30%] pl-4 flex justify-start">
                  <div>
                    <button className="bg-blue-100 text-blue-400 rounded-full px-5">
                      active
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="h-[17%] flex items-center ">
            <div className="flex w-full justify-between mt-3">
              <div className="flex">
                <div className="flex items-center gap-x-1">
                  <div className="text-green-500 mr-1">
                    <BsCircleFill />
                  </div>

                  <div>
                    <p className="mr-4">active</p>
                  </div>

                  <div className="flex items-center gap-x-1">
                    <div className="text-red-500 mr-1">
                      <BsCircleFill />
                    </div>

                    <div>
                      <p className="mr-4">inactive</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-1">
                    <div className="text-yellow-500 mr-1">
                      <BsCircleFill />
                    </div>

                    <div>
                      <p className="mr-4">waiting</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="border border-gray-300 rounded-full px-5 py-1">
                  add url
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Url;
