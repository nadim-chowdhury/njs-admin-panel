/* eslint-disable @next/next/no-img-element */
const index = () => {
  return (
    <div>
      <div className="w-full bg-white px-4 rounded-lg ">
        <div className="h-[13%] flex justify-between items-center">
          <p>Tickets</p>
          <div className="border border-gray-300 rounded-full py-1 px-4 mt-2">
            <p>Last Tickets</p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <img className="h-full" src="/tick.png" alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default index;
