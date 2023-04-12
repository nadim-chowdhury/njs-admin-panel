import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Consumption = () => {
  const [value, setValue] = useState(6);

  const handleCredit = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-x-4 mt-6">
        <div className="bg-white shadow-sm px-4 py-2 rounded-lg">
          <div className="flex justify-between items-center h-[10%] pt-1">
            <p>Consumption</p>
            <div className="border border-gray-300 rounded-full px-4 py-1">
              <p>History</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div>
              <img className="w-28 mt-10" src="./sleeping.png" alt="img" />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="border border-gray-300 px-4 py-1 rounded-full mt-10">
              Show all history
            </button>
          </div>
        </div>

        <div className="bg-white px-4 py-2 rounded-lg">
          <div className="flex h-[10%] justify-between items-center pt-1">
            <p>Increase</p>

            <div className="border border-gray-300 rounded-full px-4 py-1">
              <p>Transaction</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-3">
            <div>
              <img src="./ticket.png" alt="img" className="w-28 mt-10" />
            </div>

            <div>
              <p className="text-red-600">Remaining credit : {value}</p>
            </div>

            <div>
              <button
                onClick={handleCredit}
                className="border border-gray-300 px-4 py-1 rounded-full "
              >
                Increase credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumption;
