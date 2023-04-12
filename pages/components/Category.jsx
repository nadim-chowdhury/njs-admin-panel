/* eslint-disable @next/next/no-img-element */
const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4 capitalize gap-y-8">
        <div className="bg-white flex flex-col items-center justify-center py-2 rounded-lg">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/cdn.png"
          ></img>
          <p className="text-center">CDN</p>
        </div>

        <div className="bg-white flex flex-col items-center justify-center py-2 rounded-lg">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/dns.png"
          ></img>
          <p className="text-center">DNS</p>
        </div>

        <div className="bg-white flex flex-col items-center justify-center py-2 rounded-lg">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/cloud.png"
          ></img>
          <p className="text-center">Cloud live</p>
        </div>

        <div className="bg-white flex flex-col items-center justify-center py-2 rounded-lg">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/cloud-server.png"
          ></img>
          <p className="text-center">Servers</p>
        </div>

        <div className="bg-white flex flex-col items-center justify-center py-2 rounded-lg">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/online-video.png"
          ></img>
          <p className="text-center">video service</p>
        </div>
        <div className="bg-white  flex flex-col items-center justify-center py-2  rounded-lg ">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/security.png"
          ></img>
          <p className="text-center">Firewall</p>
        </div>
        <div className="bg-white  flex flex-col items-center justify-center py-2  rounded-lg  ">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/calculator.png"
          ></img>
          <p className="text-center">Computing</p>
        </div>
        <div className="bg-white  flex flex-col items-center justify-center py-2  rounded-lg ">
          <img
            className="lg:h-12 lg:w-12 xl:h-20 xl:w-20 p-3"
            alt="img"
            src="/folders.png"
          ></img>
          <p className="text-center">document</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
